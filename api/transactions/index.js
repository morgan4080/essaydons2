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

async function saveSuccessfulPayment(metadata, status) {
  try {
    const response = await prisma.orders.update({
      where: { id: parseInt(metadata.order_id) },
      data: {
        status: status
      },
    });
    return {
      status: 200,
      responseObj: {
        success: response
      }
    }
  } catch (e) {
    return {
      status: 400,
      responseObj: {
        error: e
      }
    }
  }
}

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200)
  }

  if (req.query.payment_intent && (req.body && req.body.order)) {

    let user;

    try {
      user = await authMiddleware(req);
    } catch (e) {
      res.status(400).json({
        error: e
      });
    }

    let customer;

    if (user.metadata !== null && typeof user.metadata === "string") {
      user.metadata = JSON.parse(user.metadata);
    }

    if (user.metadata === null || !user.metadata.hasOwnProperty("stripe_ck_id")) {
      try {
        customer = await stripe.customers.create({
          name: user.name,
          description: 'essaydons.co customer',
          email: user.email,
          phone: user.phone,
        });
      } catch (e) {
        res.status(400).json({
          error: e
        });
      }

      try {
        let data = {};
        data.metadata = JSON.stringify({
          ...user.metadata,
          stripe_ck_id: customer.id,
        });
        await prisma.users.update({
          where: { id: user.id },
          data: {
            ...data
          },
        });
      } catch (e) {
        res.status(400).json({
          error: e
        });
      }
    } else {
      customer = {
        id: user.metadata.stripe_ck_id
      };
    }

    let response;

    try {
      response = await prisma.orders.create({
        data: {
          accounts: { connect: { id: user.account_id } },
          users: { connect: { id: user.id } },
          order_details: JSON.stringify(req.body.order),
          status: "processing",
        }
      });
    } catch (e) {
      res.status(400).json({
        error: e
      });
    }

    try {
      // Create a PaymentIntent on Stripe
      // A PaymentIntent represents your customer's intent to pay
      // and needs to be confirmed on the client to finalize the payment
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount: req.body.order.amount * 100,
        description: "essaydons.co - OrderID: " + response.id,
        customer: customer.id,
        metadata: {'order_id': response.id}
      });
      // Send the client_secret to the client
      // The client secret has a limited set of permissions that
      // let you finalize the payment and update some details from the client
      res.status(200).json({
        clientSecret: paymentIntent.client_secret
      });
    } catch (e) {
      res.status(400).json({
        error: e
      });
    }
  } else if (req.query.payment_succeeded) {
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
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
    // Handle the event

    /*const paymentIntent = stripeEvent.data.object;*/
    const metadata = stripeEvent.data.object.metadata.order_id;

    switch (stripeEvent.type) {
      case "payment_intent.created":
        res.status(200).json({
          message: "Payment intent created!"
        });
        break;
      case "payment_intent.payment_failed":
        const response = await saveSuccessfulPayment(metadata, "failure");
        res.status(response.status).json(response.responseObj);
        break;
      case "payment_intent.succeeded":
        const { status, responseObj } = await saveSuccessfulPayment(metadata, "success");
        res.status(status).json(responseObj);
        break;
      case "charge.dispute.created":
        const charge = stripeEvent.data.object;
        console.log("Someone disputed a payment!");
        res.status(400).json({
          charge,
          message: "Someone disputed a payment!"
        });
        break;
      case "charge.succeeded":
        console.log("charge succeeded!");
        res.status(200).json({
          message: "Charge succeeded!"
        });
        break;
      // ... handle other event types
      default:
        // Unexpected event type
        res.status(400)
    }

    // Return a 200 response to acknowledge receipt of the event
    res.status(200)
  } else if (req.query.paypal_intent) {

    let response;

    try {
      response = await prisma.orders.create({
        data: {
          accounts: { connect: { id: user.account_id } },
          users: { connect: { id: user.id } },
          order_details: JSON.stringify(req.body.order),
          status: "processing",
        }
      });
    } catch (e) {
      res.status(400).json({
        error: e
      });
    }
    // orders api
    const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
    // environment
    const environment = function () {
      let clientId = process.env.PAYPAL_CLIENT_ID || 'AYHrUgvtxhEEASQqu_wD-xzk4kk7jAlXuPnqc5oEiDy_WhfRHn5o3GkSrI013WBMZIwh1ue3Zn8YXLlw';
      let clientSecret = process.env.PAYPAL_CLIENT_SECRET || 'PAYPAL-SANDBOX-CLIENT-SECRET';

      return new checkoutNodeJssdk.core.SandboxEnvironment(
        clientId, clientSecret
      );
    };
    // client
    const payPalclient = function () {
      return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
    };
    // request
    const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
    // request headers
    request.headers["prefer"] = "return=representation";
    // request body
    request.requestBody({
      intent: "CAPTURE",
      "purchase_units": [
        {
          amount: {
            currency_code: "USD",
            value: req.body.order.amount
          }
        }]
    });
    let order;

    try {
      order = await payPalclient.client().execute(request)
    } catch (e) {
      res.status(400).json({
        error: e
      });
    }

    try {
      await saveSuccessfulPayment(response.id, "success");
    } catch (e) {
      res.status(400).json({
        error: e
      });
    }

    res.status(200).json({
      orderID: order.result.id
    });
  } else {
    res.status(400).json({
      message: "missing information"
    });
  }
}


