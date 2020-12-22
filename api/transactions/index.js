import stripe from "stripe"

const fetch = require('node-fetch');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const jwt = require('jsonwebtoken');

const { readFileSync } = require('fs');

const { join } = require('path');

const publicKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key.pub'), 'utf8');

const Stripe = require("stripe");

const stripe = Stripe('sk_test_MKa3c0iWsVFbV9WK64cNnyQd');
// Create your webhook in the Stripe dashboard at https://dashboard.stripe.com/webhooks
// Use the secret listed in the "Signing secret" section
const endpointSecret = 'whsec_pAgBXyncG361YrZ6Nq2f29EssTJsZDko';

function authMiddleware(req) {
  return new Promise((resolve, reject) => {
    const header = req.headers['authorization']

    if (header === undefined) {
      reject("header undefined")
    }

    const bearer = header.split(' ')

    const token = bearer[1]

    jwt.verify(token, publicKey,{ algorithm: 'RS256' }, (err, user) => {
      if (err) {
        reject(err)
      }
      resolve(user)
    })
  })
}

module.exports = async (req, res) => {

    if (req.query.payment_intent && (req.body && req.body.order)) {

      try {
        const user = await authMiddleware(req);

        const response = await prisma.orders.create({
          data: {
            accounts: { connect: { id: user.account_id } },
            users: { connect: { id: user.id } },
            order_details: JSON.stringify(req.body.order)
          }
        });
        // get store data to verify item prices from client application

        // Create a PaymentIntent on Stripe
        // A PaymentIntent represents your customer's intent to pay
        // and needs to be confirmed on the client to finalize the payment
        const paymentIntent = await stripe.paymentIntents.create({
          currency: "usd",
          amount: req.body.order.amount,
          description: "Order from store"
        });

        // Send the client_secret to the client
        // The client secret has a limited set of permissions that
        // let you finalize the payment and update some details from the client

        res.status(200).json({
          clientSecret: paymentIntent.client_secret,
          response: response
        });

      } catch (e) {
        res.status(400).json({
          data: {
            error: e
          }
        });
      }

    } else if (req.query.payment_succeeded && (req.body && req.body.order)) {
      // payment_succeeded

      // Webhook that listens for events sent from Stripe
      // Requires configuration in the Stripe Dashboard
      // For more information read https://stripe.com/docs/webhooks

      const sig = req.headers["stripe-signature"];
      let stripeEvent;

      try {
        // Verifies that the event was sent by Stripe and deserializes the event
        stripeEvent = stripe.webhooks.constructEvent(
          req.body,
          sig,
          endpointSecret
        );
      } catch (err) {
        return { statusCode: 400 };
      }

      // Handle the event
      switch (stripeEvent.type) {
        case "payment_intent.succeeded":
          const paymentIntent = stripeEvent.data.object;
          console.log('object', paymentIntent)
          console.log(
            "Payment was successful! Charge information:",
            paymentIntent.charges.data.filter(charge => charge.status === "succeeded")
          );
          break;
        case "charge.dispute.created":
          const charge = stripeEvent.data.object;
          console.log("Someone disputed a payment!");
          break;
        // ... handle other event types
        default:
          // Unexpected event type
          res.status(400)
      }

      // Return a 200 response to acknowledge receipt of the event
      res.status(200)
    } else {

      res.status(400).json({
        data: {
          message: "missing information"
        }
      });

    }

}


