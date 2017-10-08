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

	var responseString = "";

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
	//console.log("contact info is: "+req.body.contact);
	//console.log("type of contact info is: "+typeof(req.body.contact));
	var hasContact = req.body.contact.toUpperCase() === "yes".toUpperCase();
	if(hasContact){
         console.log("Resume has contact info");
	}else{
        console.log("Resume has no contact info");
	}

	var hasWork=req.body.work.toUpperCase() === "yes".toUpperCase();
        //console.log("work experience info is: "+req.body.work);
	        if(hasWork){
	         console.log("Resume has work info");
	        }else{
	         console.log("Resume has no work info");
	         }   

	var hasObjective = (req.body.objective.toUpperCase() === "YES");
	if(!hasObjective){
		responseString += "<br>An Objective statement highlights the purpose of a resume"
	}

	var haEducation = (req.body.education.toUpperCase() === "YES");
	if(!hasObjective){
		responseString += "<br>Your highest degree will help Employeers see your educational achievements"
	}	

	res.send(responseString);
})

app.listen(3000);
console.log("Running at Port 3000");
