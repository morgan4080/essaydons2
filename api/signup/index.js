'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

module.exports = async function (req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
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
