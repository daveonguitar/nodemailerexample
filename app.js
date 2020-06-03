require("dotenv").config();

const nodemailer = require("nodemailer");
const log = console.log;

//Step 1 - setting up a transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

//Step 2 - setting up the email message
let mailOptions = {
  from: process.env.FROM,
  to: process.env.TO,
  subject: "Is this thing on?",
  text: "Is this thing on?",
};

//Step 3 - sending the message
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return log("Error sending mail", err);
  }
  return log("Email sent!");
});
