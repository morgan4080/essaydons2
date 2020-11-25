const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const jwt = require('jsonwebtoken')

const { readFileSync } = require('fs')

const { join } = require('path')

const publicKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key.pub'), 'utf8')

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

module.exports = async function(req, res) {
  try {

    if (Object.keys(req.query).length === 0 && req.method === "GET") {
      let response = await prisma.categories.findMany()

      res.status(200).json({
        data: response
      })

    } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0 ) {
      let user = await authMiddleware(req)
      if (user.owner) {
        let response = await prisma.categories.create({
          data: {
            name: req.body.name,
            slug: req.body.slug,
            description: req.body.description,
            specifications: req.body.specifications,
          }
        })

        res.status(200).json({
          data: response
        })

      } else {
        res.status(401).json({
          data: {
            error: "only admin users allowed to create categories"
          }
        })
      }
    }
  } catch (e) {
    res.status(401).json({
      data: e
    })
  }
}


