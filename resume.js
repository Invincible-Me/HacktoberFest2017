/*Hello World*/
console.log("Hello, World!");





var express = require("express");
var app     = express();
var path    = require("path");

var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

	app.get('/',function(req,res){
		res.sendFile(path.join(__dirname+'/resume.html'));
	});


app.post('/submit',urlencodedParser, function (req, res) {
	// console.log(req.body);

	response = {
		first_name:req.body.first_name,
		last_name:req.body.last_name
	};
	console.log(response);

console.log(req.body.haveResumeYes);
console.log(req.body.haveResumeNO);

	// console.log("have resume value is: "+req.body.haveResumeYes);
	// console.log(res);

})
app.listen(3000);



console.log("Running at Port 3000");


























