'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { readFileSync } = require('fs');

const { join } = require('path');

const privateKey = readFileSync(join(__dirname, '_JWTKeys', 'jwtRS256.key'), 'utf8');

module.exports = async function (req, res) {
  if (req.body && req.body.email && req.body.password) {
    let response = await doLogin(req);
    if (response.token !== null) {
      res.status(200).json(response);
    } else {
      res.status(400).json(response);
    }
  } else {
    res.json({
      error: "request body missing required parameters"
    })
  }
};

async function doLogin(req) {
  const clientPassword = req.body.password;
  const clientEmail = req.body.email;
  const user = await prisma.users.findOne({
    where: {
      email: clientEmail
    }
  });
  if (user !== null && user !== undefined) {
    let match = await bcrypt.compare(clientPassword, user.password);
    if (match) {
      const token = jwt.sign({ user: user }, privateKey, { algorithm: 'RS256', expiresIn: '1d' });
      return await userFound(token);
    } else {
      return userNotFound("password mismatch");
    }
  } else {
    return userNotFound("user not found");
  }
}

function userNotFound(err) {
  return {
    data: {
      status: 'error: ' + err,
      token: null,
      user: null,
    }
  };
}

async function userFound(user, token) {
  // update user to include token
  return {
    data: {
      status: 'success',
      token: token,
      user: user,
    }
  };
}
