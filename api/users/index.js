'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { readFileSync } = require('fs');

const { join } = require('path');

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8');

function authenticateToken(req, res) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) res.status(401)

  jwt.verify(token, privateKey, (err, user) => {
    if (err) res.status(403)
    req.user = user
  })
}

module.exports = async function (req, res) {
    await authenticateToken(req, res);

    // read req.user

    res.json({
      test: req.user,
    })

    if (Object.keys(req.query).length === 0 && req.method === "GET") {
        try{
          let response = await index();

          res.status(200).json({
            data: response
          });
        } catch (e) {
          res.status(500)
        }
    } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {
        try {
          let response = await edit(parseInt(req.query.id));

          res.status(200).json({
            data: response
          });
        } catch (e) {
          res.status(500)
        }

    } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0 ) {
        try {
          let response = await update(req, req.user.id);

          res.status(200).json({
            data: response
          });
        } catch (e) {
          res.status(500)
        }
    } else {
        res.status(500)
    }

};

/**
 * Display a listing of the users.
 *
 * @return Object
 */

async function index() {
    return await prisma.users.findMany()
}

/**
 * Show the form for editing the specified user.
 *
 * @return Object
 * @param id
 */

async function edit(id) {
    return await prisma.users.findUnique({
      where: {
        id: id
      }
    });
}

/**
 * Update the specified user.
 *
 * @return Object
 * @param req
 * @param id
 */

async function update(req, id) {
  try {
    let admin_key = '!Awesome@2021'
    const saltRounds = 10;
    let data = {};
    (req.body.name) ? data.name = req.body.name : null;
    (req.body.email) ? data.email = req.body.email : null;
    (req.body.password) ? data.password = await hash(req.body.password, saltRounds) : null;
    (req.body.phone) ? data.phone = req.body.phone : null;
    (req.body.provider) ? data.provider = req.body.provider : null;
    (req.body.provider_id) ? data.provider_id = req.body.provider_id : null;
    if (req.body.admin_key !== undefined && req.body.admin_key === admin_key) {
      (req.body.owner) ? data.owner = req.body.owner : null;
    }
    (req.body.metadata) ? data.metadata = req.body.metadata : null;

    return await prisma.users.update({
      where: { id: id },
      data: {
        ...data
      },
    })
  } catch (e) {
    return e
  }
}

async function hash(yourPassword, saltRounds) {
  return  await bcrypt.hash(yourPassword, saltRounds)
}
