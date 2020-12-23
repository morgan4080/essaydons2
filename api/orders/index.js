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

module.exports = async function (req, res) {

  if (Object.keys(req.query).length === 0 && req.method === "GET") {

    try {
      const user = await authMiddleware(req);

      if (user.owner) {
        let response = await prisma.orders.findMany({
          where: {
            account_id: user.account_id,
          },
        });

        res.status(200).json({
          orders: response
        });
      } else {
        let response = await prisma.orders.findMany({
          where: {
            user_id: user.id,
          },
        })

        res.status(200).json({
          orders: response
        })
      }

    } catch (e) {

      res.status(400).json({
        error: e
      })

    }

  } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {

    res.status(400).json({
      message: "single order views not active"
    })

  } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0 ) {

    try {
      let user = await authMiddleware(req)

      let response = await prisma.orders.create({
        data: {
          users: { connect: { id: user.id } },
          accounts: { connect: { id: user.account_id } },
          status: "processing",
          order_details: JSON.stringify(req.body.order_details)
        }
      });

      res.status(200).json({
        response: response
      })
    } catch (e) {

      res.status(400).json({
        error: e
      })

    }

  } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0  && req.query.id) {

    res.status(400).json({
      data: {
        message: "order edits not active"
      }
    })

  } else if (Object.keys(req.query).length === 1 && req.method === "DELETE" && Object.keys(req.body).length !== 0  && req.query.id) {

    res.status(400).json({
      data: {
        message: "order deletes not active"
      }
    });

  }
}
