import prisma from '../../lib/prisma'

const jwt = require('jsonwebtoken')

const { readFileSync } = require('fs')

const { join } = require('path')

const publicKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key.pub'), 'utf8');

function authMiddleware(req) {
  return new Promise((resolve, reject) => {
    const header = req.headers['authorization']

    if (header === undefined) {
      reject("header undefined")
    }

    const bearer = header.split(' ')

    const token = bearer[1]

    jwt.verify(token, publicKey,{ algorithm: 'RS256' }, (err, user) => {
      if (err) {
        reject(err)
      }
      resolve(user)
    })
  })
}

module.exports = async function (req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200)
  }
  if (Object.keys(req.query).length === 0 && req.method === "GET") {

    try {

      let response = await prisma.products.findMany({
        where: {
          account_id: 1,
        },
      })

      res.status(200).json({
        data: response
      })

    } catch (e) {

      res.status(401).json({
        data: e
      })

    }

  } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {

    res.status(401).json({
      data: {
        message: "storedata views not active"
      }
    })

  } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0 ) {

    try {
      let user = await authMiddleware(req)

      let response = await prisma.orders.create({
        data: {
          users: { connect: { id: user.id } },
          accounts: { connect: { id: user.account_id } },
          categories: { connect: { id: req.body.category_id } },
          product: JSON.stringify(req.body.product)
        }
      })

      res.status(200).json({
        data: response
      })

    } catch (e) {

      res.status(401).json({
        data: e
      })

    }

  } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0  && req.query.id) {

    res.status(401).json({
      data: {
        message: "storedata edits not active"
      }
    })

  } else if (Object.keys(req.query).length === 1 && req.method === "DELETE" && Object.keys(req.body).length !== 0  && req.query.id) {

    res.status(401).json({
      data: {
        message: "storedata deletes not active"
      }
    })

  }
}


