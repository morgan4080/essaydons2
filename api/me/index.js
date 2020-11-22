'use strict'

const jwt = require('jsonwebtoken');

const { readFileSync } = require('fs');

const { join } = require('path');

const privateKey = readFileSync(join(__dirname, '_JWTKeys', 'jwtRS256.key'), 'utf8');

function authenticateToken(req, res) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) res.status(401)

  jwt.verify(token, privateKey, (err, user) => {
    if (err) res.status(403)
    req.user = user
  })
}

module.exports = async function (req, res) {
  await authenticateToken(req, res);

  res.json({
    test: req.user,
  })
};
