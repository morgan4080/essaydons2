'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

module.exports = async function (req, res) {
    if (Object.keys(req.query).length === 0 && req.method === "GET") {
        let response = await index();
        if (response !== null) {
          res.status(200).json({
            data: response
          });
        } else {
          res.status(400).json({
            data: response
          });
        }
    } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {
        let response = await edit(parseInt(req.query.id));
        if (response !== null) {
          res.status(200).json({
            data: response
          });
        } else {
          res.status(400).json({
            data: response
          });
        }
    } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
        let response = await store(req);

        if (response !== null) {
          res.status(200).json({
            data: response
          });
        } else {
          res.status(400).json({
            data: response
          });
        }
    } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0  && req.body.name !== undefined && req.query.id) {
        let response = await update(req, parseInt(req.query.id));

        if (response !== null) {
          res.status(200).json({
            data: response
          });
        } else {
          res.status(400).json({
            data: response
          });
        }
    } else {
        res.status(400).json({
          data: {
            message: "error",
            request: req
          }
        });
    }

};

/**
 * Display a listing of the users.
 *
 * @return Object
 */

async function index() {
    return await prisma.users.findMany()
}

/**
 * Show the form for editing the specified user.
 *
 * @return Object
 * @param id
 */

async function edit(id) {
    return  await prisma.users.findOne({
      where: {
        id: id
      }
    })
}

/**
 * Store a newly created user.
 *
 * @return Object
 * @param req
 */

async function store(req) {
  const saltRounds = 10;
  const yourPassword = req.body.password;
  let hashedPassword = await bcrypt.hash(yourPassword, saltRounds);

  return await prisma.users.create({
    data: {
      account_id: req.body.account_id,
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      provider: (req.body.provider !== undefined && req.body.provider) ? req.body.provider : "local",
      provider_id: (req.body.provider_id !== undefined && req.body.provider_id) ? req.body.provider_id : "local_id",
      owner: (req.body.owner !== undefined && req.body.owner) ? req.body.owner : false,
      metadata: (req.body.metadata !== undefined && req.body.metadata) ? JSON.stringify(req.body.metadata) : null,
      created_at: '',
      updated_at: null,
      deleted_at: null,
    },
  })
}

/**
 * Update the specified user.
 *
 * @return Object
 * @param req
 * @param id
 */

async function update(req, id) {
  const saltRounds = 10;
  const yourPassword = req.body.password;
  let hashedPassword = await bcrypt.hash(yourPassword, saltRounds);
  return await prisma.users.update({
    where: { id: id },
    data: {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      provider: (req.body.provider !== undefined && req.body.provider) ? req.body.provider : "local",
      provider_id: (req.body.provider_id !== undefined && req.body.provider_id) ? req.body.provider_id : "local_id",
      owner: (req.body.owner !== undefined && req.body.owner) ? req.body.owner : false,
      metadata: (req.body.metadata !== undefined && req.body.metadata) ? JSON.stringify(req.body.metadata) : null,
      updated_at: '',
    },
  })
}


