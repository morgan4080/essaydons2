'use strict'

const jwt = require('jsonwebtoken');

const { readFileSync } = require('fs');

const { join } = require('path');

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8');

function authenticateToken(req) {
  const header = req.headers['authorization'];

  if (header === undefined) {
    return {
      token: req.headers,
      status: 403
    }
  }

  const bearer = header.split(' ');

  const token = bearer[1];

  jwt.verify(token, privateKey, (err, user) => {
    if (err) {
      return {
        error: err,
        status: 403
      }
    }
    return {
      user: user,
      status: 200
    }
  })
}

module.exports = async function (req, res) {
  let response = await authenticateToken(req);

  res.status(response.status).json({
    data: response
  })
};
