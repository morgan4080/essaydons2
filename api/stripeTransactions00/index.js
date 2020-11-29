import stripe from "stripe"

const fetch = require('node-fetch')

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async function (req, res) {

    if (req.query.payment_intent && (req.body && req.body.items)) {

      try {
        // get store data to verify item prices from client application
        let storeDatabase = await prisma.products.findMany({
          where: {
            account_id: 1,
          },
        });
        const amount = req.body.reduce((prev, item) => {
          // lookup item information from "database" and calculate total amount
          const itemData = storeDatabase.data.find(
            storeItem => storeItem.id === item.id
          );
          return prev + itemData.price * 100 * item.quantity;
        }, 0);



      } catch (e) {

      }

    } else {

      res.status(401).json({
        data: {
          message: "missing information"
        }
      });

    }

}


