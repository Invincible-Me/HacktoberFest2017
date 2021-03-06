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
           //console.log("Resume has contact info");
	}else{
           // console.log("Resume has no contact info");
	   responseString += "<br>If you don't put your contact info, how will your employer tell you that you got the job?";
	}

	var hasWork=req.body.work.toUpperCase() === "yes".toUpperCase();
        //console.log("work experience info is: "+req.body.work);
	if(hasWork){
	   //console.log("Resume has work info");
	}else{
	   //console.log("Resume has no work info");
	   responseString += "<br>It is very important to include your previous work history";
	}   

	var hasObjective = (req.body.objective.toUpperCase() === "YES");
	if(!hasObjective){
		responseString += "<br>An Objective statement highlights the purpose of a resume";
	}

	var hasEducation = (req.body.skills.toUpperCase() === "YES");
	if(!hasObjective){
		responseString += "<br>Your highest degree will help Employeers see your educational achievements";
	}	
	
	var hasSkills = (req.body.skills.toUpperCase() === "YES");
	if(!hasSkills){
		responseString += "<br>List some skills to show what you are good at"
	}	
	
	var inSchool = (req.body.school.toUpperCase() === "YES");
	if(inSchool){
		responseString += "<br>Since Your still in school you should list some relevant school courses"
	}
	
	
	//final response string formatting
	if(responseString.length===0){
		responseString = "<br>Your resume is in good shape! You got this"
	}
	else{
		responseString = "You should consider the following feedback:"+responseString;
    }
	res.send(responseString);
})

app.listen(3000);
console.log("Running at Port 3000");
