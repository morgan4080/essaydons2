'use strict'
import Cors from 'cors'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const { readFileSync } = require('fs')

const { join } = require('path')

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8')

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

module.exports = async function (req, res) {
  // Run cors
  await cors(req, res)

  if (req.method === "POST" && Object.keys(req.body).length !== 0 && req.body.email && req.body.password) {
    let response = await doLogin(req)
    res.status(response.status).json({
      data: response
    })
  } else {
    res.status(401).json({
      data: {
        message: 'required details missing'
      }
    })
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
