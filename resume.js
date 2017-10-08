/*Hello World*/
console.log("Hello, World!");





var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/resume.html'));
});

app.listen(3000);



console.log("Running at Port 3000");


























