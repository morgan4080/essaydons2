import prisma from '../../lib/prisma'

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

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200)
  }

  try {
    const user = await authMiddleware(req)

    if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.page) {

      try {

        const page = parseInt(req.query.page)

        let paginator

        if (page && page === 1 ) {
          paginator = {
            skip: 0,
          }
        } else {
          paginator = {
            skip: 10 * page
          }
        }

        let totalTaken = 10

        if (user.owner) {

          let response

          try {
            response = await prisma.orders.findMany({
              ...paginator,
              take: totalTaken,
              where: {
                account_id: user.account_id,
              },
              orderBy: [
                {
                  updated_at: 'desc',
                },
              ],
              include: {
                users: true
              }
            })
          } catch (e) {

            res.status(405).json({
              error: e,
              message: "orders query error"
            })
          }

          const ordersCount = await prisma.orders.count()

          const totalPages = typeof ordersCount === "number" ?  Math.ceil(ordersCount/10) : 0

          let links = []

          for (let i = 1; i < totalPages; i++ ) {
            links.push({
              url: `/profile?page=${i}`,
              label: i,
              active: page === i
            })
          }

          res.status(200).json({
            orders: response,
            links,
            totalCount: ordersCount
          })

        } else {

          const response = await prisma.orders.findMany({
            ...paginator,
            take: totalTaken,
            where: {
              user_id: user.id,
            },
            orderBy: [
              {
                updated_at: 'desc',
              },
            ],
            include: {
              users: true
            }
          })

          const ordersCount = await prisma.orders.count({
            where: {
              user_id: user.id,
            },
          })

          const totalPages = typeof ordersCount === "number" ?  Math.ceil(ordersCount/10) : 0

          let links = []

          for (let i = 1; i < totalPages; i++ ) {
            links.push({
              url: `/profile?page=${i}`,
              label: i,
              active: page === i
            })
          }

          res.status(200).json({
            orders: response,
            links,
            totalCount: ordersCount
          })
        }

      } catch (e) {

        res.status(405).json({
          error: e
        })

      }

    } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {
      try {

        console.log("user", JSON.stringify(user))

        if (user && user.owner && parseInt(req.query.id) !== 0) {
          const order = await prisma.orders.findUnique({
            where: {
              id: parseInt(req.query.id)
            },
            include: {
              users: true
            }
          })

          console.log("owner getting order", JSON.stringify(order))

          res.status(200).json({
            order
          })
        } else {
          const order = await prisma.orders.findUnique({
            where: {
              user_id: user.id,
              id: parseInt(req.query.id)
            },
            include: {
              users: true
            }
          })

          console.log("user getting order", JSON.stringify(order))

          res.status(200).json({
            order
          })
        }
        res.status(405).json({
          message: "Unauthorized access"
        })
      } catch (e) {
        res.status(405).json({
          message: "single order error",
          error: e
        })
      }

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
        message: "order edits not active"
      })

    } else if (Object.keys(req.query).length === 1 && req.method === "DELETE" && Object.keys(req.body).length !== 0  && req.query.id) {

      res.status(400).json({
        message: "order deletes not active"
      });

    } else {
      res.status(405).json({
        message: "missing required credentials",
        error: "un allowed method"
      })
    }
  } catch (e) {
    res.status(405).json({
      error: e,
      message: "Orders method not allowed"
    })
  }
}
