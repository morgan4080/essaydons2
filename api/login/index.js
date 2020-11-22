'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { readFileSync } = require('fs');

const { join } = require('path');

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8');

module.exports = async function (req, res) {
  if (req.body && req.body.email && req.body.password) {
    try {
      await doLogin(req, res);
    } catch (e) {
      res.status(500);
    }
  } else {
    res.status(500)
  }
};

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
