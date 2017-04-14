var express = require('express');
var router = express.Router();
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var request = require('request');
/* GET home page. */
router.get('/',function (req,res) {
	res.render('index');
});
var http = require('http');

var options = {
  host: 'sandbox-healthservice.priaid.ch',
  path: '/issues/104/info?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Ijc0NWtpc2hsYXkuc3JAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxNDk5IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE3LTA0LTE0IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE0OTIxODAyMjIsIm5iZiI6MTQ5MjE3MzAyMn0.15ngNFB-iPhQX9EbseU8iRbKCXrPFFoz5REEzwDKmK8&amp;language=en-gb&amp;format=json'
};


router.post('/search',function (req,res,next) {
	var symptoms = req.body.symptoms;

	//console.log(req.body.symptoms);
	
	/*http.post(login, function(resp){
	  resp.on('data', function(chunk){
	  		console.log("chunk",chunk);
	    	
	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	});

	http.get(options, function(resp){
	  resp.on('data', function(chunk){
	  		console.log("chunk",chunk);
	    	
	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	}); */
	var result = "";
	var tagArray = symptoms.split(" ");
	var category = ["head","eyes","nose","lips","teeth","ears","throat","chest","lungs","coughing","belly","hands","arms","legs","skin","depression"];
	var diseases = ["Abdominal Pain","Abnormal Facial Expressions","Absence of Speech (Loss of Speech)","Acid Reflux (GERD) Symptoms and Signs","Acute Sinusitis Symptoms and Signs","ADHD (Inattention)","ADHD Symptoms and Signs","Alcohol Poisoning Symptoms and Signs","Alcohol Withdrawal Symptoms and Signs","Allergy","Altered Mental Status","Alzheimer's Disease Symptoms and Signs","Anal Itching","Anaphylaxis Symptoms and Signs","Anemia", "Angular Cheilitis Symptoms and Signs","Ankle Pain","Anxiety","Aphasia (Loss of Speech)","Appendicitis Symptoms and Signs","Arm Pain","Asthma Symptoms and Signs","Atrial fibrillation (AFib) Symptoms and Signs","Attention Deficit (Inattention)","Autism Symptoms and Signs","Avian Influenza (Bird Flu (Avian Influenza) Symptoms and Signs)"];
	console.log(diseases.length);
	var voteCategory = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var i=0;i<tagArray.length;i++){
		for(var j = 0;j<diseases.length;j++){
			if(tagArray[i]==(diseases[i])){
				//res.json(diseases[i]);
				result += diseases[i];
				break;
			}
		}		
	}
	if(result){
		res.json(result);
	}
	else{
		res.json("Not Found-- May Be"+diseases[5]);
	}

	
	
});

 




module.exports = router;
