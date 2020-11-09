'use strict'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async function (req, res) {
    let response = await prisma.user.findOne({
      where: {
        id: id
      }
    });

    if (response) {
      res.status(200).json({
        data: response
      })
    } else {
      res.status(400).json({
        data: response
      })
    }
};
