const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'caitbaird@gmail.com',
      clientId: '118365106713-di12r3mehr3kcu1of5d8619e6q6p3n1b.apps.googleusercontent.com',
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: '1/5eSLxOl_tkf0RFPfPEgWNx2wa1WwwLKSU98sP_U1z9o'
    }
  });

  let mailOptions;
  switch (body.type) {
    case "ebookSignup":
      mailOptions = {

      }
  } 
}