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

const allowCORS = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Accept, Accept-Version, Content-Length, Date, X-Api-Version');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    res.status(200);
    return
  }

  return await fn(req, res)
}

const handler = async  (req, res) => {
  try {
    const user = await authMiddleware(req)

    res.status(200).json({
      ...user
    });

  } catch (e) {
    res.status(401).json({
      error: e
    });
  }
}

module.exports = allowCORS(handler);
