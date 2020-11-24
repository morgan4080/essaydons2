'use strict'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const { readFileSync } = require('fs')

const { join } = require('path')

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8')

module.exports = async function (req, res) {
  if (req.body && req.body.email && req.body.password) {
    let response = await doLogin(req)
    res.status(response.status).json({
      data: response
    })
  } else {
    res.status(500)
  }
};

async function doLogin(req) {
  const user = await prisma.users.findFirst({
    where: {
      email: req.body.email,
    },
  })

  if (user === null) {
    return {
      message: 'user not found',
      status: 401
    }
  }

  let match = await bcrypt.compare(req.body.password, user.password)

  delete user.password

  delete user.deleted_at

  delete user.created_at

  delete user.updated_at

  delete user.account_id

  delete user.provider

  delete user.provider_id

  if (match) {
    const token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })
    return {
      message: 'success',
      status: 200,
      token: token
    }
  } else {
    return {
      message: 'password/email dont match our record',
      status: 401
    }
  }
}
