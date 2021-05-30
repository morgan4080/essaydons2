import prisma from '../../lib/prisma'

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const fetch = require('node-fetch');

const { readFileSync } = require('fs')

const { join } = require('path')

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

  /*else if (req.method === "GET" && Object.keys(req.query).length > 0) {
    let { code, provider, callback } = req.query
    if (callback && provider === 'google') {
      if (!code) {
        console.log(`google login failed`);
        res.status(405).json({
          error: {
            error_code: 'method not allowed',
            message: 'required details missing'
          }
        });
      }
      console.log(`google login`);
      //check for the user from google oath server using returned tokens
    }
    if (callback && provider === 'facebook') {
      if (!code) {
        console.log(`fb login failed`);
        res.status(405).json({
          error: {
            error_code: 'method not allowed',
            message: 'required details missing'
          }
        })
      }
      console.log(`fb login`);
      //Exchanging Code for an Access Token
      let client_id = '525187695512107';
      let client_secret = '35dec4ec88d187f9634366e38c9752fe';
      let redirect_uri = encodeURI('https://essaydons.co/api/login?callback=true&provider=facebook');
      let url = `https://graph.facebook.com/v10.0/oauth/access_token?client_id=${client_id}&redirect_uri=${redirect_uri}&client_secret=${client_secret}&code=${code}`
      let d;
      await
        fetch(url, { method: 'get' })
          .then(res => res.json())
          .then(json => {
            d = json
            console.log(json)
          })
          .catch(e => {
            console.log(e)
          })

      console.log(`data from fb`, d)
      //check for the user from facebook graph server using returned tokens
      //gather whether the user exists in database if not create user and redirect to password change view with jwt token
      // return token to login page if user exists
    }
  }*/

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

module.exports = allowCors(handler)
