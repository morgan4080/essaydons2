const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

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
  if (Object.keys(req.query).length === 0 && req.method === "GET") {
    let account_id = req.body.account_id
    if (account_id === null) {
      res.status(401).json({
        data: {
          error: "missing account id"
        }
      });
    }
    let response = await index(account_id)
    if (response !== null) {
      res.status(200).json({
        data: response
      });
    } else {
      res.status(401).json({
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
      res.status(401).json({
        data: response
      });
    }
  } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0 ) {
    const user = await authMiddleware(req)
    let response = await store(req, user);

    if (response !== null) {
      res.status(200).json({
        data: response
      });
    } else {
      res.status(401).json({
        data: response
      });
    }
  } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0  && req.query.id) {
    let response = await update(req, parseInt(req.query.id));

    if (response !== null) {
      res.status(200).json({
        data: response
      });
    } else {
      res.status(401).json({
        data: response
      });
    }
  } else {
    res.status(401).json({
      data: {
        error: "request missing requirements"
      }
    });
  }
};

/**
 * Display a listing of the accounts.
 *
 * @return Object
 */

async function index(account_id) {
  return await prisma.posts.findMany({
    where: {
      account_id: account_id,
    },
  })
}

/**
 * Show the form for editing the specified account.
 *
 * @return Object
 * @param id
 */

async function edit(id) {
  return await prisma.posts.findUnique({
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

async function store(req, user) {
  try {

    return await prisma.posts.create({
      data: {
        users: { connect: { id: user.id } },
        accounts: { connect: { id: user.account_id } },
        title: req.body.title,
        slug: req.body.slug,
        excerpt: req.body.excerpt,
        description: req.body.description,
        tags: (req.body.tags !== undefined || req.body.tags) ? JSON.stringify(req.body.tags) : null,
        metadata: (req.body.metadata !== undefined || req.body.metadata) ? JSON.stringify(req.body.metadata) : null
      }
    })
  } catch (e) {
    return {
      error: e
    }
  }
}

/**
 * Update the specified account.
 *
 * @return Object
 * @param req
 * @param id
 */

async function update(req, id) {
  try {
    let user = await authMiddleware(req)
    return await prisma.posts.update({
      where: { id: id },
      data: {
        users: { connect: { id: user.id } },
        accounts: { connect: { id: user.account_id } },
        title: req.body.title,
        slug: req.body.slug,
        excerpt: req.body.excerpt,
        description: req.body.description,
        tags: (req.body.tags !== undefined || req.body.tags) ? JSON.stringify(req.body.tags) : null,
        metadata: (req.body.metadata !== undefined || req.body.metadata) ? JSON.stringify(req.body.metadata) : null
      }
    })
  } catch (e) {
    return {
      error: e
    }
  }
}
