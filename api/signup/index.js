'use strict'
import Cors from 'cors'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

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

  if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
    try {
      const saltRounds = 10
      const yourPassword = req.body.password
      let hashedPassword = await bcrypt.hash(yourPassword, saltRounds)
      let admin_key = '!Awesome@2021'
      let owner = false

      if (req.body.admin_key !== undefined && req.body.admin_key === admin_key) {
        owner = true
      }

      let response = await prisma.users.create({
        data: {
          accounts: { connect: { id: req.body.account_id } },
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          phone: req.body.phone,
          owner: owner
        }
      })

      res.status(200).json({
        data: response
      })
    } catch (e) {
      res.status(401).json({ data: e })
    }
  }
}
