const nodemailer = require('nodemailer');

console.log('MAILTRAP Credentials:', process.env.MAILTRAP_USER, process.env.MAILTRAP_PASS);

const transporter = nodemailer.createTransport({
service: 'gmail',
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

exports.sendEmail = async (to, message) => {
    console.log("Sending email to:", to);
  console.log("Message:", message);   
  await transporter.sendMail({
    from: 'apoorvabomminneni@gmail.com',
    to:to,
    subject: 'Notification',
    text: message
  });
};