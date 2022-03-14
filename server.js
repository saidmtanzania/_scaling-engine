//jshint esversion:6
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
      app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req,res){
  res.send("Contact Me at: saidmtanzania@gmail.com");
});

app.get("/about", function(req,res){
  res.send("About saidmtanzania is me");
});

app.post("/about", function(req, res){
  var name = req.body.name;
  var college = req.body.college;
  res.send("The name is: "+name+" The college are: "+college);
});

app.listen(3000, function(){
  console.log("Server Started on port 3000");
});
