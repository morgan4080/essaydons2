const sqlite3 = require("sqlite3").verbose();

import { open } from 'sqlite'

module.exports = async function (req, res) {

    const db = await open({
        filename: "E:/Git/azfunTS/azurefun.sqlite",
        driver: sqlite3.Database
    });

    if (Object.keys(req.query).length === 0 && req.method === "GET") {
        res.status(200).send(await index(db));
    } else if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.id) {
        res.status(200).send(await edit(db, parseInt(req.query.id)));
    } else if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
        res.status(200).send(await store(db, req));
    } else if (Object.keys(req.query).length === 1 && req.method === "PUT" && Object.keys(req.body).length !== 0  && req.body.name !== undefined && req.query.id) {
        res.status(200).send(await update(db, req, parseInt(req.query.id)));
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
 * @param db
 */

async function index(db) {
    return JSON.stringify(await db.all(`SELECT * FROM users`));
}

/**
 * Show the form for editing the specified user.
 *
 * @return JsonResponse
 * @param db
 * @param id
 */

async function edit(db, id) {
    return JSON.stringify(await db.all(`SELECT * FROM users WHERE id = ${id}`));
}

/**
 * Store a newly created user.
 *
 * @return JsonResponse
 * @param db
 * @param req
 */

async function store(db, req) {
    return JSON.stringify(await db.run('INSERT INTO users(name) VALUES (:name)', {
        ':name': req.body.name
    }));
}

/**
 * Update the specified user.
 *
 * @return JsonResponse
 * @param db
 * @param req
 * @param id
 */

async function update(db, req, id) {
    return JSON.stringify(await db.run('UPDATE users SET name = ? WHERE id = ?', req.body.name, id));
}


