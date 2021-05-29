
import prisma from '../../lib/prisma'

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const { readFileSync } = require('fs')

const { join } = require('path')

const url = require('url')

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8')

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = async function (req, res) {
  if (req.method === "GET" && req.query.callback) {
    if (req.query.provider === 'google') {
      console.log(`${req.query.provider}`, req.query);
      //check for the user from google oath server using returned tokens
    }
    if (req.query.provider === 'facebook') {
      console.log(`facebook path`)
      res.status(401).json({
        request: req
      })
      /*let hashed = url.parse(req.url)
      console.log("parsed", hashed)*/
      //check for the user from facebook graph server using returned tokens
      //gather whether the user exists in database if not create user and redirect to password change view with jwt token
      // return token to login page if user exists
    }
  }
  if (req.method === "POST" && Object.keys(req.body).length !== 0 && req.body.email && req.body.password) {
    let response = await doLogin(req)
    res.status(response.status).json({
      ...response
    })
  } else {
    res.status(401).json({
      message: 'required details missing'
    })
  }
};

async function doLogin(req) {
  console.log("looogin")
  const user = await prisma.users.findFirst({
    where: {
      email: req.body.email,
    },
  })

  if (user === null) {
    return {
      message: 'user not found',
      status: 401
    }
  }

  let match = await bcrypt.compare(req.body.password, user.password)

  delete user.password

  delete user.provider_id

  if (match) {
    const token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })
    return {
      message: 'success',
      status: 200,
      token: token
    }
  } else {
    return {
      message: 'password/email dont match our record',
      status: 401
    }
  }
}

module.exports = allowCors(handler)
