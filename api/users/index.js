import prisma from '../../lib/prisma'

const bcrypt = require('bcrypt')

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

  const user = await authMiddleware(req, res);

  if (Object.keys(req.query).length === 0 && req.method === "GET") {
      try{
        let response = await index();

        res.status(200).json({
          data: response
        });

      } catch (e) {
        res.status(405).json({
          error: e,
          message: "couldn't fetch users"
        })
      }
  } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {
      try {
        let response = await edit(parseInt(req.query.id))

        res.status(200).json({
          data: response
        })

      } catch (e) {
        res.status(405).json({
          error: e,
          message: "couldn't fetch users"
        })
      }

  } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.type) {
      try {
        let response = await fetchWriters(req.query.type)

        res.status(200).json({
          data: response
        })

      } catch (e) {
        res.status(405).json({
          error: e,
          message: "couldn't fetch users"
        })
      }

  } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0) {
      try {
        let response = await update(req, user.id)
        res.status(200).json({
          data: response
        })
      } catch (e) {
        res.status(405).json({
          error: e,
          message: "couldn't update user"
        })
      }
  } else {
      res.status(500)
  }
}

/**
 * Display a listing of the users.
 *
 * @return Object
 */

async function index() {
    return await prisma.users.findMany()
}

/**
 * Show the form for editing the specified user.
 *
 * @return Object
 * @param id
 */

async function edit(id) {
    return await prisma.users.findUnique({
      where: {
        id: id
      }
    });
}

/**
 * Show the form for editing the specified user.
 *
 * @return Array
 * @param type
 */

async function fetchWriters(type) {
    const cpus = require('os').cpus()
    console.log("type", cpus)
    return await prisma.users.findMany({
      where: {
        type: type
      }
    })
}

/**
 * Update the specified user.
 *
 * @return Object
 * @param req
 * @param id
 */

async function update(req, id) {
  try {
    let admin_key = '!Awesome@2021'
    const saltRounds = 10;
    let data = {};
    (req.body.name) ? data.name = req.body.name : null;
    (req.body.email) ? data.email = req.body.email : null;
    (req.body.password) ? data.password = await hash(req.body.password, saltRounds) : null;
    (req.body.phone) ? data.phone = req.body.phone : null;
    (req.body.provider) ? data.provider = req.body.provider : null;
    (req.body.provider_id) ? data.provider_id = req.body.provider_id : null;
    if (req.body.admin_key !== undefined && req.body.admin_key === admin_key) {
      (req.body.owner) ? data.owner = req.body.owner : null;
    }
    (req.body.metadata) ? data.metadata = req.body.metadata : null;

    return await prisma.users.update({
      where: { id: id },
      data: {
        ...data
      },
    })
  } catch (e) {
    return e
  }
}

async function hash(yourPassword, saltRounds) {
  return  await bcrypt.hash(yourPassword, saltRounds)
}
