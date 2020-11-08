const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

module.exports = async function (req, res) {
    if (Object.keys(req.query).length === 0 && req.method === "GET") {
        res.status(200).send(await index());
    } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {
        res.status(200).send(await edit(parseInt(req.query.id)));
    } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
        res.status(200).send(await store(req));
    } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0  && req.body.name !== undefined && req.query.id) {
        res.status(200).send(await update(req, parseInt(req.query.id)));
    } else {
        res.status(400).send(JSON.stringify({
          requestObject: req
        }));
    }

};

/**
 * Display a listing of the users.
 *
 * @return JsonResponse
 */

async function index() {
    const users = await prisma.user.findMany();
    return JSON.stringify(users);
}

/**
 * Show the form for editing the specified user.
 *
 * @return JsonResponse
 * @param id
 */

async function edit(id) {
    return JSON.stringify(await db.all(`SELECT * FROM users WHERE id = ${id}`));
}

/**
 * Store a newly created user.
 *
 * @return JsonResponse
 * @param req
 */

async function store(req) {
  const saltRounds = 10;
  const yourPassword = req.body.password;
  let hashedPassword = null;
  bcrypt.hash(yourPassword, saltRounds, (err, hash) => {
    if (err) {
      throw err
    }
    hashedPassword = hash
  });
  const newUser = await prisma.user.create({
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
  });

  return JSON.stringify(newUser);
}

/**
 * Update the specified user.
 *
 * @return JsonResponse
 * @param req
 * @param id
 */

async function update(req, id) {
    return JSON.stringify(await db.run('UPDATE users SET name = ? WHERE id = ?', req.body.name, id));
}


