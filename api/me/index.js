const jwt = require('jsonwebtoken')

const { readFileSync } = require('fs')

const { join } = require('path')

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8')

function authMiddleware(req) {
  return new Promise((resolve, reject) => {
    const header = req.headers['authorization']

    if (header === undefined) {
      reject("header undefined")
    }

    const bearer = header.split(' ')

    const token = bearer[1]

    jwt.verify(token, privateKey, (err, user) => {
      if (err) {
        reject("jwt verification error", err)
      }
      resolve(user)
    })
  })
}

module.exports = async function (req, res) {
  authMiddleware(req).then(user => {
    res.status(200).json({
      data: user
    })
  }).catch(error => {
    res.status(401).json({
      data: error
    })
  })
}
