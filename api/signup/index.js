'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { readFileSync } = require('fs');

const { join } = require('path');

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8');

/**
 * Store a newly created user.
 *
 * @return Object
 * @param req
 * @param res
 */

async function store(req, res) {
  try {
    const clientEmail = req.body.email;

    const user = await prisma.users.findOne({
      where: {
        email: clientEmail
      }
    });

    if (user === null) {
      const saltRounds = 10
      const yourPassword = req.body.password
      let hashedPassword = await bcrypt.hash(yourPassword, saltRounds);

      let data = {
        account_id: req.body.account_id,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
        provider: (req.body.provider !== undefined && req.body.provider) ? req.body.provider : null,
        provider_id: (req.body.provider_id !== undefined && req.body.provider_id) ? req.body.provider_id : null,
        owner: (req.body.owner !== undefined && req.body.owner) ? req.body.owner : false,
        metadata: (req.body.metadata !== undefined && req.body.metadata) ? JSON.stringify(req.body.metadata) : null
      };

      let response = await prisma.users.create({
        data: {
          ...data
        }
      });

      if (response === null) res.status(500);

      await doLogin(req, res);

    } else {
      res.status(301).json({
        data: {
          status: 'user already exists',
          token: null,
          user: null,
        }
      });
    }

  } catch (e) {
    res.status(500);
  }
}

async function doLogin(req, res) {

  try {
    const clientEmail = req.body.email;

    const user = await prisma.users.findOne({
      where: {
        email: clientEmail
      }
    });

    if (user === null) {
      res.status(401).json({
        data: {
          status: 'user not found',
          token: null,
          user: null,
        }
      });
    }

    let match = await bcrypt.compare(req.body.password, user.password);

    if (match) {
      const token = jwt.sign({ user: user }, privateKey, { algorithm: 'RS256' });
      res.status(200).json({
        data: {
          status: 'success',
          token: token,
          user: user,
        }
      });
    } else {
      res.status(401).json({
        data: {
          status: 'password/email dont match our record',
          token: null,
          user: null,
        }
      })
    }
  } catch (e) {
    res.status(500);
  }
}

module.exports = async function (req, res) {
  if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
    try {
      await store(req, res);
    } catch (e) {
      res.status(500);
    }
  }
}
