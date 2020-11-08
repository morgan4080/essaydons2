const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

module.exports = async function (req, res) {
  if (req.body && req.body.email && req.body.password) {
    // res.setHeader()
    res.json(await doLogin(req))
  } else {
    res.json({
      error: "request body missing required parameters"
    })
  }
};

async function doLogin(req) {
  const clientPassword = req.body.password;
  const clientEmail = req.body.email;
  let hash = null;
  const user = await prisma.user.findOne({
    where: {
      email: clientEmail
    }
  });

  if (user) {
    hash = user.password;
    bcrypt.compare(clientPassword, hash, function(err, response) {
      if (response === true) {
        return userFound(user)
      } else {
        return userNotFound(err)
      }
    })
  } else {
    return userNotFound("user not found")
  }
}

function userNotFound(err) {
  return {
    error: err,
    user: null,
  };
}

function userFound(user) {
  return {
    error: null,
    user: user,
  };
}
