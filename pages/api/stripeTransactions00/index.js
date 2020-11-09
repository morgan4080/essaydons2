import axios from "axios"

import stripe from "stripe"

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async function (req, res) {

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


