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

  const mailOptions = {
    from: 'caitbaird@gmail.com',
    to: process.env.SEND_TO_EMAIL,
    subject: `New caitlinbaird.com Message from ${body.name}`,
    text: `SENDER NAME: ${body.name}, SENDER EMAIL: ${body.email}, MESSAGE: ${body.message}`,
    html: `<p><strong>Sender Name:</strong> ${body.name}</p>
          <p><strong>Sender Email:</strong> ${body.email}</p>
          <br>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
          <br>
          <p><strong>Interested in:</strong></p>
          ${body.interestOneOnOne ? '<p>One-on-One Coaching</p>' : ''}
          ${body.interestGroup ? '<p>Group Coaching</p>' : ''}
          ${body.interestWorkshop ? '<p>Workshops</p>' : ''}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      });
    } else {
      console.log('Message Sent:', + info.response);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(info.response),
      });
    };
  });
};