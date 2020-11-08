const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async function (req, res) {
    if (Object.keys(req.query).length === 0 && req.method === "GET") {
      res.status(200).send( await index());
    } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {
      res.status(200).send( await edit(parseInt(req.query.id)));
    } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
      res.status(200).send( await store(req));
    } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0  && req.body.name !== undefined && req.query.id) {
      res.status(200).send( await update(req, parseInt(req.query.id)));
    } else {
      res.status(200).send(
        JSON.stringify({
          requestObject: req
        })
      )
    }
};

/**
 * Display a listing of the accounts.
 *
 * @return JsonResponse
 */

async function index() {
    return JSON.stringify(await db.all(`SELECT * FROM accounts`));
}

/**
 * Show the form for editing the specified account.
 *
 * @return JsonResponse
 * @param id
 */

async function edit(id) {
    return JSON.stringify(await db.all(`SELECT * FROM accounts WHERE id = ${id}`));
}

/**
 * Store a newly created account.
 *
 * @return JsonResponse
 * @param req
 */

async function store(req) {
  const newAccount = await prisma.account.create({
    data: {
      name: req.body.name,
    },
  });

  return JSON.stringify(newAccount);
}

/**
 * Update the specified account.
 *
 * @return JsonResponse
 * @param req
 * @param id
 */

async function update(req, id) {
    return JSON.stringify(await db.run('UPDATE accounts SET name = ? WHERE id = ?', req.body.name, id));
}


