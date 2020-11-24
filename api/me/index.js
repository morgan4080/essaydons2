'use strict'

const jwt = require('jsonwebtoken')

const { readFileSync } = require('fs')

const { join } = require('path')

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8')

function initAuthMiddleware(req, res) {
  const header = req.headers['authorization'];

  if (header === undefined) {
    res.status(403)
  }

  const bearer = header.split(' ');

  const token = bearer[1];

  jwt.verify(token, privateKey, (err, user) => {
    if (err) {
      res.status(403)
    }
    req.user = user
  })
}

module.exports = async function (req, res) {
  await initAuthMiddleware(req, res)
  res.status(200).json({
    data: req.user
  })
}
