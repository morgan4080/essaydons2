import prisma from '../../lib/prisma'

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')

const { readFileSync } = require('fs')

const { join } = require('path')

const privateKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key'), 'utf8')

const nodemailer = require("nodemailer")

const publicKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key.pub'), 'utf8')

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

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

async function sendMail(origin,destination,message,auth = { user: "info@essaydons.co", pass: process.env.PRIVATE_MAIL_PASSWORD }) {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: auth.user,
      pass: auth.pass,
    },
  });
  return await transporter.sendMail({
    from: `"${origin.name}" <${origin.email}>`, // sender address
    to: `${destination.email}`, // list of receivers
    subject: `${message.subject}`, // Subject line
    text: `${message.text}`, // plain text body
    html: `${message.html}`, // html body
  });
}

const handler = async function (req, res) {
  if (Object.keys(req.query).length === 1 && req.method === "GET" && req.query.email) {
    try {
      console.log("email", req.query.email)

      const user = await prisma.users.findUnique({
        where: {
          email: req.query.email
        }
      })

      console.log(user)

      if (user) {
        let token = null

        if (user) {
          delete user.password

          delete user.provider_id

          token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })
        }

        const origin = {
          name: "EssayDons User Manager",
          email: "info@essaydons.co",
        }

        const destination = {
          email: user.email,
        }

        const message = {
          subject: "Account Credential Reset",
          text: "Hey" + user.name,
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email and password reset email</title>
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
<span style="color:transparent !important; overflow:hidden !important; display:none !important; line-height:0 !important; height:0 !important; opacity:0 !important; visibility:hidden !important; width:0 !important; mso-hide:all;">This is your preheader text for this email (Read more about email preheaders here - https://goo.gl/e60hyK)</span>

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
<td class="hero-subheader__title" style="font-size: 43px; font-weight: bold; padding: 80px 0 15px 0;" align="left">Hey <span style="color: #42fbb7;">${user.name}</span> we'll assist you to reset your account credentials</td>
</tr>

<tr>
<td class="hero-subheader__content" style="font-size: 15px; line-height: 27px; padding: 0 60px 90px 0;" align="left">
<p>A reliable partner for professional academic services. Contact us on this email address for more information.</p>
</td>
</tr>

<tr>
<td class="hero-subheader__content" style="font-size: 16px; line-height: 27px; padding: 0 60px 90px 0;" align="left">
<a href="https://essaydons.co/reset/email-confirmation?token=${token}" target="_blank" rel="noopener noreferrer" style="padding: 10px 20px 10px 20px; background-color: #42fbb7; color: white;">Reset Credentials</a>
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
        }

        await sendMail(origin,destination,message)

        res.status(200).json({
          message: "Email reset link sent"
        })

      }

    } catch (e) {
      res.status(405).json({
        message: "User not found",
        error: e
      })
    }

  }
  if (Object.keys(req.query).length === 1 && req.method === "POST" && req.query.reset && req.body.email && req.body.password) {
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
      res.status(405).json({
        message: "User not found",
        error: e
      })
    }

    const saltRounds = 10
    const yourPassword = req.body.password
    const hashedPassword = await bcrypt.hash(yourPassword, saltRounds)

    await prisma.users.update({
      where: { id: user.id },
      data: {
        password: hashedPassword
      },
    })

    res.status(200).json({
      message: "Password Reset Successful"
    })

  }
  if (Object.keys(req.query).length === 1 && req.method === "POST" && req.query.verify && req.body.token) {
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
      res.status(405).json({
        message: "User not found",
        error: e
      })
    }

    user = await prisma.users.update({
      where: { id: user.id },
      data: {
        email_verified_at: new Date()
      },
    })

    let token = null

    if (user) {
      delete user.password

      delete user.provider_id

      token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })
    }

    console.log("user", user)

    res.status(200).json({
      message: "email verified",
      response: user,
      token: token
    })
  }
  if (Object.keys(req.query).length === 0 && req.method === "POST" && Object.keys(req.body).length !== 0  && req.body.name !== undefined) {
    try {
      const saltRounds = 10
      const yourPassword = req.body.password
      let hashedPassword = await bcrypt.hash(yourPassword, saltRounds)
      let admin_key = '!Awesome@2021'
      let owner = false

      if (req.body.admin_key !== undefined && req.body.admin_key === admin_key) {
        owner = true
      }

      let response = await prisma.users.create({
        data: {
          accounts: { connect: { id: req.body.account_id } },
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          phone: req.body.phone,
          owner: owner
        }
      })

      delete response.password

      delete response.provider_id

      const token = jwt.sign({ ...response }, privateKey, { algorithm: 'RS256' });

      const origin = {
        name: "EssayDons Signups",
        email: "info@essaydons.co",
      };

      const destination = {
        email: req.body.email,
      };

      const message = {
        subject: "Welcome to Essaydons",
        text: "Hey" + req.body.name,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
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
<span style="color:transparent !important; overflow:hidden !important; display:none !important; line-height:0 !important; height:0 !important; opacity:0 !important; visibility:hidden !important; width:0 !important; mso-hide:all;">This is your preheader text for this email (Read more about email preheaders here - https://goo.gl/e60hyK)</span>

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
<td class="hero-subheader__title" style="font-size: 43px; font-weight: bold; padding: 80px 0 15px 0;" align="left">Hey <span style="color: #42fbb7;">${req.body.name}</span> welcome to Essaydons.co</td>
</tr>

<tr>
<td class="hero-subheader__content" style="font-size: 15px; line-height: 27px; padding: 0 60px 90px 0;" align="left">
<p>A reliable partner for professional academic services. Contact us on this email address for more information.</p>
</td>
</tr>

<tr>
<td class="hero-subheader__content" style="font-size: 16px; line-height: 27px; padding: 0 60px 90px 0;" align="left">
<a href="https://essaydons.co/profile?token=${token}" target="_blank" rel="noopener noreferrer" style="padding: 10px 20px 10px 20px; background-color: #42fbb7; color: white;">Confirm Email</a>
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

      await sendMail(origin,destination,message)

      res.status(200).json({
        ...response
      })

    } catch (e) {
      res.status(401).json({ error: e })
    }
  }
}

module.exports = allowCors(handler)
