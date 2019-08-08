const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'caitbaird@gmail.com',
      clientId: '819400783143-69fspin3nm5lqqve0erkfgspj1fiq5uf.apps.googleusercontent.com',
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: '1/JNDS_ibxgHAasJNGgE8cA8sCamooWtSfPllj7zZVgek'
    }
  });

  const mailOptions = {
    from: 'caitlin@caitlinbaird.com',
    to: 'caitlin@caitlinbaird.com',
    subject: `New caitlinbaird.com Message from ${body.name}`,
    text: `SENDER NAME: ${body.name}, SENDER EMAIL: ${body.email}, MESSAGE: ${body.message}`,
    html: `<p><strong>Sender Name:</strong> ${body.name}</p>
          <p><strong>Sender Email:</strong> ${body.email}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
          <p><strong>Interested in:</strong></p>
          ${body.interestOneOnOne ? '<p>One-on-One Coaching</p>' : ''}
          ${body.interestGroup ? '<p>Group Coaching</p>' : ''}
          ${body.interestWorkshop ? '<p>Workshops</p>' : ''}`
  };

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
    }
  });
};