const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async function (req, res) {
  res.json({ message: 'hello' })
};

