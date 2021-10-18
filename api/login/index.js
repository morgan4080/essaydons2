import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = require('express')();

const bodyParser = require('body-parser');

const cors = require('cors')

const { OAuth2Client } = require('google-auth-library')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const fetch = require('node-fetch')

const { readFileSync } = require('fs')

const { join } = require('path')

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), { encoding : 'utf8' })

app.use(cors({}))

app.use(bodyParser.json())

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

app.get("/api/login", async (req, res) => {
  console.log("Be magnified GOD");
  res.json({ data: 'data' });
});

module.exports = app;


