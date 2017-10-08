/*Hello World*/
console.log("Hello, World!");

var path = require("path");
var express = require("express");
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/resume.html'));
});


app.post('/submit', function (req, res) {

	//if a checkbox is not checked it will be undefined
	response = {
		form_data:req.body
	};
	console.log(response);

    //if haveResumeYes is defined
	if(req.body.haveResumeYes){
		console.log("yes value is selected")
	}
	
	//if haveResumeNo is defined
	if(req.body.haveResumeNo){
		console.log("no value is selected")
	}
	console.log("contact info is: "+req.body.contact);

})

app.listen(3000);
console.log("Running at Port 3000");
