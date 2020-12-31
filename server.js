//jshint esversion:6

require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

const app = express();



let message = ''
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render('home', {message: message});
  message = ''

});




app.listen(process.env.PORT || 2900, function(){
  console.log("Server started on port 2900.");
});
