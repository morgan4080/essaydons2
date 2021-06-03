import prisma from '../../lib/prisma'

const { OAuth2Client } = require('google-auth-library')

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

      if (response.status === 308) {
        // send back any data from provider to aid in signup
        // inform them social cant be used without email

        res.redirect(`/register?message=${response.message}`)
        return
      }

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
  const { code, codeVerifier, client_id, redirect_uri } = req.body

  if (callback && provider === 'google') {
    if (!code) {
      console.log(`google login failed`)

      return {
        status: 405,
        message: 'required details missing'
      }
    }

    console.log(`google login`, code)

    // Exchange authorization code for token

    try {

      const oAuth2Client = await getAuthenticatedClient(code, codeVerifier, client_id, redirect_uri)

      // use sub property of  ID token as the unique-identifier key for a user

      const tokenInfo = await oAuth2Client.getTokenInfo(
        oAuth2Client.credentials.id_token
      );

      console.log("google id token info", tokenInfo);

      /*const url = 'https://people.googleapis.com/v1/people/me?personFields=names'

      const res = await oAuth2Client.request({url})

      console.log(res.data)*/

      // refactor auth social out

      return {
        status: 405,
        error: tokenInfo
      }

    } catch (e) {

      return {
        status: 405,
        error: e
      }

    }

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
      //check for the user from facebook graph server using token

      const response0 = await fetch('https://graph.facebook.com/v10.0/me?fields=about,id,name,picture{url},email&access_token=' + data.access_token)

      const facebookUserData = await response0.json()

      if (facebookUserData.hasOwnProperty('error')) {
        return {
          status: 405,
          error: facebookUserData.error
        }
      }

      // check if user exists and return token to login page

      const { id, email, name, picture } = facebookUserData

      // if user doesnt have email redirect back with facebook details to register route

      if (!email) {
        // figure out if the user without email exists in db by provider_id
        // login user using provider_id
        const user = await prisma.users.findFirst({
          where: {
            provider_id: id,
          },
        })

        if (user && user.provider_id) {
          delete user.password

          delete user.provider_id

          const token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })

          console.log("logged in existing client through provider_id")

          return {
            message: "Logged In",
            status: 200,
            token: token
          }
        }

        return {
          message: "Provide missing email",
          status: 308
        }
      }

      const user = await prisma.users.findFirst({
        where: {
          email: email,
        },
      })

      if (user) {
        // login existing user

        // assign jwt token using user data

        delete user.password

        delete user.provider_id

        const token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })

        console.log("logged in existing client through FB")

        if (!user.provider_id) {

          let data00 = {
            provider: "facebook",
            provider_id: id
          }

          await prisma.users.update({
            where: { id: user.id },
            data: {
              ...data00
            },
          })

        }

        return {
          message: "Logged In",
          status: 200,
          token: token
        }

      }

      // sign up user

      // assign jwt token

      const account_id = 1

      let response00 = await prisma.users.create({
        data: {
          accounts: { connect: { id: account_id } },
          name: name,
          email: email
        }
      })

      // add metadata field

      let metadata = {
        country: '',
        userType: 'student',
        profile_picture: ''
      }

      delete response00.password

      delete response00.provider_id

      const token00 = jwt.sign({ ...response00 }, privateKey, { algorithm: 'RS256' })

      return {
        message: "Logged In",
        status: 200,
        token: token00
      }

    } catch (e) {
      console.log(`facebook oauth error`, e)
      return {
        status: 405,
        error: e
      }
    }
  }
}

function getAuthenticatedClient(code, codeVerifier, id, uri) {

  const { client_id, client_secret, redirect_uri } = {
    client_id: id,
    client_secret: 'VpqJRnugdEOA9WXeWeohFXJb',
    redirect_uri: uri
  }

  const oAuth2Client = new OAuth2Client(
    client_id,
    client_secret,
    redirect_uri
  )

  console.log("auth client created")

  return new Promise(async (resolve, reject) => {
    try {
      /*
        const codes = await oAuth2Client.generateCodeVerifierAsync()
        console.log("codes generated", codes)
        codeVerifier: codes.codeVerifier
      */

      // Now that we have the code, use that to acquire tokens.

      const r = await oAuth2Client.getToken(
        {
          code,
          codeVerifier
        }
      )

      console.log('Tokens', r)

      // Make sure to set the credentials on the OAuth2 client.
      oAuth2Client.setCredentials(r.tokens)

      resolve(oAuth2Client)
    }
    catch (e) {

      reject(e)

    }
  })

}

module.exports = allowCors(handler)
