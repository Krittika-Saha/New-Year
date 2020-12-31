//jshint esversion:6

require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

const app = express();



let message = ''
let email_given = ''
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render('home', {message: message});
  message = ''

});

app.post("/", function(req, res){
  res.redirect('/');
  message = 'Thank You'
  email_given = req.body.email
  let mailOptions = {
        from: process.env.GMAIL,
        to: email_given,
        subject: 'Email from Node-App: A Test Message!',
        text: 'Some content to send'
  };

  let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'login',
          user: process.env.GMAIL,
          pass: process.env.PASSWORD,
        }
  });
  transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
  });
});



app.listen(process.env.PORT || 2900, function(){
  console.log("Server started on port 2900.");
});
