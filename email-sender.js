const nodemailer = require('nodemailer');

const emailConfig = {
  service: 'gmail', 
  auth: {
    user: '',
    pass: '',
  },
};
const transporter = nodemailer.createTransport({
  service: emailConfig.service,
  auth: emailConfig.auth,
});

const mailOptions = {
  from: '',
  to: '',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});