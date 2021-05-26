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
  try {
    let user = await authMiddleware(req);

    if (user.owner) {
      if (Object.keys(req.query).length === 0 && req.method === "GET") {
        let response = await index();
        if (response !== null) {
          res.status(200).json({
            data: response
          });
        } else {
          res.status(400).json({
            data: response
          });
        }
      } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {
        let response = await edit(parseInt(req.query.id));
        if (response !== null) {
          res.status(200).json({
            data: response
          });
        } else {
          res.status(400).json({
            data: response
          });
        }
      } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
        let response = await store(req);

        if (response !== null) {
          res.status(200).json({
            data: response
          });
        } else {
          res.status(400).json({
            data: response
          });
        }
      } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0  && req.body.name !== undefined && req.query.id) {
        let response = await update(req, parseInt(req.query.id));

        if (response !== null) {
          res.status(200).json({
            data: response
          });
        } else {
          res.status(400).json({
            data: response
          });
        }
      } else {
        res.status(400).json({
          data: {
            message: "error",
            request: req
          }
        });
      }
    } else {
      res.status(401).json({
        data: "not an admin user"
      })
    }
  } catch (error) {
    res.status(401).json({
      data: error
    })
  }
};

/**
 * Display a listing of the accounts.
 *
 * @return Object
 */

async function index() {
  return await prisma.accounts.findMany()
}

/**
 * Show the form for editing the specified account.
 *
 * @return Object
 * @param id
 */

async function edit(id) {
  return await prisma.accounts.findUnique({
    where: {
      id: id
    }
  });
}

/**
 * Store a newly created account.
 *
 * @return Object
 * @param req
 */

async function store(req) {
  return await prisma.accounts.create({
    data: {
      name: req.body.name,
    },
  })
}

/**
 * Update the specified account.
 *
 * @return Object
 * @param req
 * @param id
 */

async function update(req, id) {
    return await prisma.accounts.update({
      where: { id: id },
      data: {
        name: req.body.name
      }
    })
}


