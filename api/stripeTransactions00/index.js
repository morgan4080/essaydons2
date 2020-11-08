import axios from "axios"

import stripe from "stripe"

const sqlite3 = require("sqlite3").verbose();

import { open } from 'sqlite'

module.exports = async function (req, res) {

    const dbInstance = await open({
        filename: "serverMiddleware/azurefun.sqlite",
        driver: sqlite3.Database
    });

    if (req.query.name || (req.body && req.body.name)) {
      let table = 'accounts';

      res.status(200).send(JSON.stringify({
        requestObject: req,
        accounts: await dbInstance.all(`SELECT * FROM ${table}`)
      }));

    } else {

      res.status(400).send('Please pass a payment query string or request body');

    }

}


