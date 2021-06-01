import prisma from '../../lib/prisma'

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const fetch = require('node-fetch')

const { readFileSync } = require('fs')

const { join } = require('path')

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8')

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

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
  if (req.method === "POST" && Object.keys(req.body).length !== 0 && req.body.email && req.body.password) {
    try {
      let response = await doLogin(req)
      res.status(response.status).json({
        ...response
      })
    } catch (e) {
      res.status(401).json({
        error: e
      });
    }
  }

  else if (req.method === "POST" && Object.keys(req.query).length > 0) {
    // do social login
    try {
      let response = await doSocialLogin(req, res)

      /*if (response.status === 308) {
        res.redirect(`/login?access_token=${response.token}`)
        return
      }*/

      res.status(response.status).json({
        ...response
      })
    } catch (e) {
      res.status(401).json({
        error: e
      });
    }
  }

  else {
    res.status(401).json({
      message: 'required details missing'
    })
  }
};

async function doLogin(req) {
  try {

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
  } catch (e) {

    throw new Error(e)

  }
}

async function doSocialLogin(req, res) {
  const { provider, callback } = req.query
  const { code } = req.body

  if (callback && provider === 'google') {
    if (!code) {
      console.log(`google login failed`)

      return {
        status: 405,
        message: 'required details missing'
      }
    }

    console.log(`google login`, code)
    //check for the user from google oath server using returned tokens
  }

  if (callback && provider === 'facebook') {
    if (!code) {
      console.log(`fb login failed`);
      return {
        status: 405,
        message: 'required details missing'
      }
    }

    console.log(`fb login`, code);
    //Exchanging Code for an Access Token
    let client_id = '525187695512107'
    let client_secret = '35dec4ec88d187f9634366e38c9752fe'
    let redirect_uri = encodeURIComponent('https://essaydons.co/login')
    let url = `https://graph.facebook.com/v10.0/oauth/access_token?client_id=${client_id}&redirect_uri=${redirect_uri}&client_secret=${client_secret}&code=${code}`

    try {
      const response = await fetch(url)

      const data = await response.json()

      if (data.hasOwnProperty('error')) {
        return {
          status: 405,
          error: data.error
        }
      }

      // use token
      const response0 = await fetch('https://graph.facebook.com/v10.0/me?fields=about,name,picture{url},email&access_token=' + data.access_token)

      const facebookUserData = await response0.json()

      if (facebookUserData.hasOwnProperty('error')) {
        return {
          status: 405,
          error: facebookUserData.error
        }
      }

      // check if user exists and return token to login page

      const { email, name, picture } = facebookUserData

      // if user doesnt have email redirect back with facebook details to register route
      // please provide email address to complete process

      const user = await prisma.users.findFirst({
        where: {
          email: email,
        },
      })

      if (user !== null) {
        // assign jwt token using user data
        delete user.password

        delete user.provider_id

        const token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })

        console.log("logged in existing client through FB")

        return {
          message: "Logged In",
          status: 200,
          token: token
        }
      }

      // sign up user
      // assign jwt token

      return {
        status: 200,
        message: facebookUserData
      }

    } catch (e) {
      console.log(`facebook oauth error`, e)
      return {
        status: 405,
        error: e
      }
    }
    //check for the user from facebook graph server using returned tokens
    //gather whether the user exists in database if not create user and redirect to password change view with jwt token
    // return token to login page if user exists
  }
}

module.exports = allowCors(handler)
