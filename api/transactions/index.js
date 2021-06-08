import prisma from '../../lib/prisma'

const jwt = require('jsonwebtoken');

const { readFileSync } = require('fs');

const { join } = require('path');

const publicKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key.pub'), 'utf8');

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});

const webhook_secret = process.env.WEBHOOK_SECRET;

const nodemailer = require("nodemailer");

import { buffer } from 'micro';

const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
// paypal environment
function environment() {
  if (process.env.NODE_ENV === "production") {
    let clientId = process.env.PAYPAL_CLIENT_ID;
    let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

    return new checkoutNodeJssdk.core.LiveEnvironment(
      clientId, clientSecret
    );
  } else {
    let clientId = process.env.SANDBOX_PAYPAL_CLIENT_ID;
    let clientSecret = process.env.SANDBOX_PAYPAL_SECRET;

    return new checkoutNodeJssdk.core.SandboxEnvironment(
      clientId, clientSecret
    );
  }
}
// paypal client
function client() {
  return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

async function sendMail(origin,destination,message, attachments,auth = {user: "info@essaydons.co", pass: "Motsae254"}) {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: auth.user,
      pass: auth.pass,
    },
  });
  if (attachments.length > 0) {
    return await transporter.sendMail({
      from: `"${origin.name}" <${origin.email}>`, // sender address
      to: `${destination.email}`, // list of receivers
      subject: `${message.subject}`, // Subject line
      text: `${message.text}`, // plain text body
      html: `${message.html}`, // html body
      attachments: [...attachments],
    });
  } else {
    return await transporter.sendMail({
      from: `"${origin.name}" <${origin.email}>`, // sender address
      to: `${destination.email}`, // list of receivers
      subject: `${message.subject}`, // Subject line
      text: `${message.text}`, // plain text body
      html: `${message.html}`, // html body
    });
  }
}

function authMiddleware(req) {
  return new Promise((resolve, reject) => {
    const header = req.headers['authorization']

    if (header === undefined) {
      reject("header undefined")
    }

    const bearer = header.split(' ');

    const token = bearer[1];

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
      where: { id: (typeof metadata === "string") ? parseInt(metadata) : metadata },
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
    console.log(metadata, e)
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

  let user;

  try {
    user = await authMiddleware(req);
  } catch (e) {
    console.log("token user not found", e)
  }

  if (req.query.payment_intent && (req.body && req.body.order) && req.method === "POST") {

    let customer = null;

    // parse json from metadata

    if (user !== undefined) {
      if (user.metadata !== null && typeof user.metadata === "string") {
        user.metadata = JSON.parse(user.metadata);
      }
    }

    // creates stripe customer adding stripe_ck_id to user.metadata

    if (user.metadata === null || !user.metadata.hasOwnProperty("stripe_ck_id")) {
      try {
        customer = await stripe.customers.create({
          name: user.name,
          description: 'essaydons.co customer',
          email: user.email,
          phone: user.phone,
        });
      } catch (e) {
        console.log(e);
        res.status(400);
      }

      if (!customer) {
        res.status(405).json({
          message: "Stripe Customer Error",
          error: null
        });

        return
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
        console.log("user update failure", e);
        res.status(405).json({
          message: "user update failure",
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
      console.log("create order error", e);
      res.status(405).json({
        message: "create order error",
        error: e
      });
    }

    try {
      let attachments = [];

      const origin = {
        name: "EssayDons Orders",
        email: "info@essaydons.co",
      };

      const destination = {
        email: user.email,
      };

      const message = {
        subject: "Order Confirmed",
        text: "Hey" + user.name,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio - Responsive Email Template</title>
<style type="text/css">
/* ----- Custom Font Import ----- */
@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin,latin-ext);

/* ----- Text Styles ----- */
table{
font-family: 'Lato', Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-font-smoothing: antialiased;
font-smoothing: antialiased;
}

@media only screen and (max-width: 700px){
/* ----- Base styles ----- */
.full-width-container{
padding: 0 !important;
}

.container{
width: 100% !important;
}

/* ----- Header ----- */
.header td{
padding: 30px 15px 30px 15px !important;
}

/* ----- Projects list ----- */
.projects-list{
display: block !important;
}

.projects-list tr{
display: block !important;
}

.projects-list td{
display: block !important;
}

.projects-list tbody{
display: block !important;
}

.projects-list img{
margin: 0 auto 25px auto;
}

/* ----- Half block ----- */
.half-block{
display: block !important;
}

.half-block tr{
display: block !important;
}

.half-block td{
display: block !important;
}

.half-block__image{
width: 100% !important;
background-size: cover;
}

.half-block__content{
width: 100% !important;
box-sizing: border-box;
padding: 25px 15px 25px 15px !important;
}

/* ----- Hero subheader ----- */
.hero-subheader__title{
padding: 80px 15px 15px 15px !important;
font-size: 35px !important;
}

.hero-subheader__content{
padding: 0 15px 90px 15px !important;
}

/* ----- Title block ----- */
.title-block{
padding: 0 15px 0 15px;
}

/* ----- Paragraph block ----- */
.paragraph-block__content{
padding: 25px 15px 18px 15px !important;
}

/* ----- Info bullets ----- */
.info-bullets{
display: block !important;
}

.info-bullets tr{
display: block !important;
}

.info-bullets td{
display: block !important;
}

.info-bullets tbody{
display: block;
}

.info-bullets__icon{
text-align: center;
padding: 0 0 15px 0 !important;
}

.info-bullets__content{
text-align: center;
}

.info-bullets__block{
padding: 25px !important;
}

/* ----- CTA block ----- */
.cta-block__title{
padding: 35px 15px 0 15px !important;
}

.cta-block__content{
padding: 20px 15px 27px 15px !important;
}

.cta-block__button{
padding: 0 15px 0 15px !important;
}
}
</style>

<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
</head>

<body style="padding: 0; margin: 0;" bgcolor="#eeeeee">
<span style="color:transparent !important; overflow:hidden !important; display:none !important; line-height:0px !important; height:0 !important; opacity:0 !important; visibility:hidden !important; width:0 !important; mso-hide:all;">This is your preheader text for this email (Read more about email preheaders here - https://goo.gl/e60hyK)</span>

<!-- / Full width container -->
<table class="full-width-container" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" bgcolor="#eeeeee" style="width: 100%; height: 100%; padding: 30px 0 30px 0;">
<tbody><tr>
<td align="center" valign="top">
<!-- / 700px container -->
<table class="container" border="0" cellpadding="0" cellspacing="0" width="700" bgcolor="#ffffff" style="width: 700px;">
<tbody><tr>
<td align="center" valign="top">
<!-- / Hero subheader -->
<table class="container hero-subheader" border="0" cellpadding="0" cellspacing="0" width="620" style="width: 620px;">
<tbody><tr>
<td class="hero-subheader__title" style="font-size: 43px; font-weight: bold; padding: 80px 0 15px 0;" align="left">Hey <span style="color: #42fbb7;">${user.name}</span> you have made an order of ${req.body.order.amount} USD to Essaydons.co</td>
</tr>

<tr>
<td class="hero-subheader__content" style="font-size: 15px; line-height: 27px; padding: 0 60px 90px 0;" align="left">
  <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Payment Method</p>
            </td>
            <td>
                <p style="margin: 0;">Stripe</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Order ID</p>
            </td>
            <td>
                <p style="margin: 0;">${response.id}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Subject</p>
            </td>
            <td>
                <p style="margin: 0;">${req.body.order.subject}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Topic</p>
            </td>
            <td>
                <p style="margin: 0;">${req.body.order.topic}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Order Description</p>
            </td>
            <td>
                <p style="margin: 0;">${req.body.order.details}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;"> Pages - Spacing - Format</p>
            </td>
            <td>
                <p style="margin: 0;">${req.body.order.pages} - ${req.body.order.spacing} - ${req.body.order.format}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Total</p>
            </td>
            <td>
                <p style="margin: 0;">${req.body.order.amount}</p>
            </td>
        </tr>
    </table>
</td>
</tr>

<tr>
<td class="hero-subheader__content" style="font-size: 16px; line-height: 27px; padding: 0 60px 90px 0;" align="left">
<a href="https://essaydons.co/profile" target="_blank" rel="noopener noreferrer" style="padding: 10px 20px 10px 20px; background-color: #42fbb7; color: white;">Order Details</a>
</td>
</tr>
</tbody></table>
<!-- / Footer -->
<table class="container" border="0" cellpadding="0" cellspacing="0" width="100%" align="center">
<tbody><tr>
<td align="center">
<table class="container" border="0" cellpadding="0" cellspacing="0" width="620" align="center" style="border-top: 1px solid #eeeeee; width: 620px;">
<tbody><tr>
<td style="text-align: center; padding: 50px 0 10px 0;">
<a href="#" style="font-size: 28px; text-decoration: none; color: #d5d5d5;">Thank You</a>
</td>
</tr>

<tr>
<td style="color: #d5d5d5; text-align: center; font-size: 15px; padding: 10px 0 60px 0; line-height: 22px;">Copyright © 2021 <a href="https://essadons.co/" target="_blank" style="text-decoration: none; border-bottom: 1px solid #d5d5d5; color: #d5d5d5;">Essaydons</a>. <br>All rights reserved.</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<!-- /// Footer -->
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

</body></html>`,
      };

      await sendMail(origin,destination,message,attachments)

    } catch (e) {
      console.log("Send Mail Error", e)
    }

    try {
      // Create a PaymentIntent on Stripe
      // A PaymentIntent represents your customer's intent to pay
      // and needs to be confirmed on the client to finalize the payment
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount: req.body.order.amount * 100,
        payment_method_types: ['card'],
        description: "essaydons.co - Order ID: " + response.id,
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
      console.log("stripe payment intent", e)
      res.status(405).json({
        message: "stripe payment intent failed",
        error: e
      });
    }
  } else if (req.query.payment_succeeded && req.method === "POST") {
    // payment_succeeded
    // Webhook that listens for events sent from Stripe
    // Requires configuration in the Stripe Dashboard
    // For more information read https://stripe.com/docs/webhooks
    const sig = req.headers['stripe-signature'];
    let stripeEvent;
    let metadata;
    try {
      const buf = await buffer(req);
      const body = buf.toString();
      // Verifies that the event was sent by Stripe and deserializes the event
      stripeEvent = await stripe.webhooks.constructEvent(
        body,
        sig,
        webhook_secret
      );

      metadata = stripeEvent.data.object.metadata.order_id;
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
    // Handle the event

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
        console.log("Someone disputed a payment!", charge);
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
  } else if (req.query.paypal_intent && req.method === "POST") {

    let response;

    try {
      response = await prisma.orders.create({
        data: {
          accounts: { connect: { id: user.account_id } },
          users: { connect: { id: user.id } },
          order_details: (typeof req.body.order !== "string") ? JSON.stringify(req.body.order) : req.body.order,
          status: "processing",
        }
      });
    } catch (e) {
      console.log("create order error", e);
      res.status(400);
    }
    // request
    const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
    // request headers
    request.headers["prefer"] = "return=representation";
    // request body
    function buildRequestBody() {
      return {
        "intent": "CAPTURE",
        "purchase_units": [
          {
            "amount": {
              "currency_code": "USD",
              "value": req.body.order.amount + ""
            }
          }
        ]
      };
    }

    request.requestBody(buildRequestBody());

    let order;

    try {
      order = await client().execute(request);
    } catch (e) {
      console.log("create order client error", e);
      res.status(400);
    }

    let orderId = "";
    if (order.statusCode === 201){
      console.log("Created Successfully");
      orderId = order.result.id;
      console.log("Links:");
      order.result.links.forEach((item, index) => {
        let rel = item.rel;
        let href = item.href;
        let method = item.method;
        let message = `\t${rel}: ${href}\tCall Type: ${method}`;
        console.log(message);
      });
    } else {
      res.status(400);
    }

    // 5. Return a successful response to the client with the order ID
    res.json({
      orderID: orderId,
      dbID: response.id
    });

  } else if(req.query.paypal_capture_intent  && req.method === "POST") {

    async function captureOrder(orderId) {
      const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderId);
      request.requestBody({});
      return await client().execute(request);
    }

    let response = await captureOrder(req.body.orderID);

    if (response.statusCode === 201) {
      /*
      let captureId = "";
      captureId = response.result.purchase_units[0]
        .payments.captures[0].id;
        */
      // might save capture id
      try {
        await saveSuccessfulPayment(req.body.dbID, "success");
      } catch (e) {
        console.log(e);
        res.status(400);
      }

      // 6. Return a successful response to the client
      res.status(200).json({
        ...response
      });
    } else {
      console.log(e);
      res.status(400);
    }

  } else if (req.query.send_attachments && req.method === "POST") {
    const { IncomingForm } = require('formidable');
    const form = new IncomingForm({ multiples: true });
    let result;
    try {
      result = await new Promise((resolve, reject) => {
        form.parse(req, function(err, fields, files) {
          if (err) {
            // Check for and handle any errors here.
            console.error(err.message);
            reject(err)
          }
          resolve({fields: fields, files: files})
        })
      });
    } catch (e) {
      console.log("formindable error", e);
      res.status(400);
    }

    try {
      let attachments = [];

      for (const arr of Object.entries(result.files)) {
        for (const file of arr[1]) {
          attachments.push({
            filename: file.name,
            content: file
          });
        }
      }

      // correct
      if (typeof result.fields.order === "string") {
        result.fields.order = JSON.parse(result.fields.order)
      }

      const origin = {
        name: "EssayDons Orders",
        email: "info@essaydons.co",
      };

      const destination = {
        email: "info@essaydons.co",
      };

      let academicLevel = [
        {
          id: 1,
          level: "High School",
        },
        {
          id: 2,
          level: "College",
        },
        {
          id: 3,
          level: "Undergraduate",
        },
        {
          id: 4,
          level: "Master's",
        },
        {
          id: 5,
          level: "PhD",
        },
      ].find(item => item.id === result.fields.order.level).level;

      const message = {
        subject: "New Order",
        text: "Hey Admin",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EssayDons Order Report</title>
<style type="text/css">
/* ----- Custom Font Import ----- */
@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin,latin-ext);

/* ----- Text Styles ----- */
table{
font-family: 'Lato', Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-font-smoothing: antialiased;
font-smoothing: antialiased;
}

@media only screen and (max-width: 700px){
/* ----- Base styles ----- */
.full-width-container{
padding: 0 !important;
}

.container{
width: 100% !important;
}

/* ----- Header ----- */
.header td{
padding: 30px 15px 30px 15px !important;
}

/* ----- Projects list ----- */
.projects-list{
display: block !important;
}

.projects-list tr{
display: block !important;
}

.projects-list td{
display: block !important;
}

.projects-list tbody{
display: block !important;
}

.projects-list img{
margin: 0 auto 25px auto;
}

/* ----- Half block ----- */
.half-block{
display: block !important;
}

.half-block tr{
display: block !important;
}

.half-block td{
display: block !important;
}

.half-block__image{
width: 100% !important;
background-size: cover;
}

.half-block__content{
width: 100% !important;
box-sizing: border-box;
padding: 25px 15px 25px 15px !important;
}

/* ----- Hero subheader ----- */
.hero-subheader__title{
padding: 80px 15px 15px 15px !important;
font-size: 35px !important;
}

.hero-subheader__content{
padding: 0 15px 90px 15px !important;
}

/* ----- Title block ----- */
.title-block{
padding: 0 15px 0 15px;
}

/* ----- Paragraph block ----- */
.paragraph-block__content{
padding: 25px 15px 18px 15px !important;
}

/* ----- Info bullets ----- */
.info-bullets{
display: block !important;
}

.info-bullets tr{
display: block !important;
}

.info-bullets td{
display: block !important;
}

.info-bullets tbody{
display: block;
}

.info-bullets__icon{
text-align: center;
padding: 0 0 15px 0 !important;
}

.info-bullets__content{
text-align: center;
}

.info-bullets__block{
padding: 25px !important;
}

/* ----- CTA block ----- */
.cta-block__title{
padding: 35px 15px 0 15px !important;
}

.cta-block__content{
padding: 20px 15px 27px 15px !important;
}

.cta-block__button{
padding: 0 15px 0 15px !important;
}
}
</style>

<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
</head>

<body style="padding: 0; margin: 0;" bgcolor="#eeeeee">
<span style="color:transparent !important; overflow:hidden !important; display:none !important; line-height:0px !important; height:0 !important; opacity:0 !important; visibility:hidden !important; width:0 !important; mso-hide:all;">This is your preheader text for this email (Read more about email preheaders here - https://goo.gl/e60hyK)</span>

<!-- / Full width container -->
<table class="full-width-container" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" bgcolor="#eeeeee" style="width: 100%; height: 100%; padding: 30px 0 30px 0;">
<tbody><tr>
<td align="center" valign="top">
<!-- / 700px container -->
<table class="container" border="0" cellpadding="0" cellspacing="0" width="700" bgcolor="#ffffff" style="width: 700px;">
<tbody><tr>
<td align="center" valign="top">
<!-- / Hero subheader -->
<table class="container hero-subheader" border="0" cellpadding="0" cellspacing="0" width="620" style="width: 620px;">
<tbody><tr>
<td class="hero-subheader__title" style="font-size: 30px; font-weight: bold; padding: 80px 0 15px 0;" align="left">Hello <span style="color: #42fbb7;">admin</span></td>
</tr>

<tr>
<td class="hero-subheader__content" style="font-size: 15px; line-height: 27px; padding: 0 60px 90px 0;" align="left">
  <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">AAcademic Level</p>
            </td>
            <td>
                <p style="margin: 0;">${academicLevel}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Subject</p>
            </td>
            <td>
                <p style="margin: 0;">${result.fields.order.subject}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Paper Type</p>
            </td>
            <td>
                <p style="margin: 0;">${result.fields.order.paper_type}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Duration</p>
            </td>
            <td>
                <p style="margin: 0;">${result.fields.order.duration.duration}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Client Details</p>
            </td>
            <td>
                <p style="margin: 0;">${result.fields.order.name} - ${result.fields.order.email} - ${result.fields.order.phone}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Topic</p>
            </td>
            <td>
                <p style="margin: 0;">${(result.fields.order.topic) ? result.fields.order.topic : "not specified"}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Order Description</p>
            </td>
            <td>
                <p style="margin: 0;">${(result.fields.order.details) ? result.fields.order.details : "not specified"}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;"> Pages - Spacing - Format</p>
            </td>
            <td>
                <p style="margin: 0;">${result.fields.order.pages} - ${result.fields.order.spacing} - ${result.fields.order.format}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;"> Sources - initial draft - Charts - Slides - one page summary - Digital copies - plagiarism report</p>
            </td>
            <td>
                <p style="margin: 0;">${result.fields.order.sources} - ${result.fields.order.initial_draft} - ${result.fields.order.charts} - ${result.fields.order.one_page_summary} - ${result.fields.order.digital_copies} - ${result.fields.order.plagiarism_report}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p style="margin: 0;font-weight: bold;">Total</p>
            </td>
            <td>
                <p style="margin: 0;">${result.fields.order.amount} USD</p>
            </td>
        </tr>
    </table>
</td>
</tr>

<tr>
<td class="hero-subheader__content" style="font-size: 16px; line-height: 27px; padding: 0 60px 90px 0;" align="left">
<a href="https://essaydons.co/profile" target="_blank" rel="noopener noreferrer" style="padding: 10px 20px 10px 20px; background-color: #42fbb7; color: white;">Order Details</a>
</td>
</tr>
</tbody></table>
<!-- / Footer -->
<table class="container" border="0" cellpadding="0" cellspacing="0" width="100%" align="center">
<tbody><tr>
<td align="center">
<table class="container" border="0" cellpadding="0" cellspacing="0" width="620" align="center" style="border-top: 1px solid #eeeeee; width: 620px;">
<tbody><tr>
<td style="text-align: center; padding: 50px 0 10px 0;">
<a href="#" style="font-size: 28px; text-decoration: none; color: #d5d5d5;">Thank You</a>
</td>
</tr>

<tr>
<td style="color: #d5d5d5; text-align: center; font-size: 15px; padding: 10px 0 60px 0; line-height: 22px;">Copyright © 2021 <a href="https://essadons.co/" target="_blank" style="text-decoration: none; border-bottom: 1px solid #d5d5d5; color: #d5d5d5;">Essaydons</a>. <br>All rights reserved.</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<!-- /// Footer -->
</td>
</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

</body></html>`,
      };

      let responder = await sendMail(origin,destination,message,attachments);

      res.status(200).json({
        response: responder
      });

    } catch (e) {
      console.log(e);
      res.status(400);
    }

  } else {
    res.status(400);
  }
}


