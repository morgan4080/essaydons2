'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

module.exports = async function (req, res) {
  if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
    let response = await doSignup(req);

    if (response !== null) {
      res.status(200).json({
        data: response
      })
    } else {
      res.status(400).json({
        data: response
      })
    }
  }
}

async function doSignup(req) {
  const saltRounds = 10
  const yourPassword = req.body.password
  let hashedPassword = await bcrypt.hash(yourPassword, saltRounds);

  let response = await prisma.users.create({
    data: {
      account_id: req.body.account_id,
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      email_verified_at: null,
      provider: (req.body.provider !== undefined && req.body.provider) ? req.body.provider : null,
      provider_id: (req.body.provider_id !== undefined && req.body.provider_id) ? req.body.provider_id : null,
      owner: (req.body.owner !== undefined && req.body.owner) ? req.body.owner : false,
      metadata: (req.body.metadata !== undefined && req.body.metadata) ? JSON.stringify(req.body.metadata) : null
    }
  })

  if (response === null) return response;

  return response
}
