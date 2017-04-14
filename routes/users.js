var express = require('express');
var router = express.Router();
var User = require("../models/user");

//Login--
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/login', function(req, res, next) {
  var userid = req.body.user;
  var pass  = req.body.pass;
  User.findOne({'userid':userid,'pass':pass},function(err,user){
  	if(err){
  		console.log(err);
  	}
  	if(user){
  	 	res.render('login', { 'user': user });
  	}
  	else{
  		res.redirect('/login',{message: "No User Exists!!"});
  	}
  });
  
});
//--Ends

//Register--
router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register', function(req, res, next) {
	var aadharid = "asadaadad"; //req.body.aadhar;
	var name  = req.body.name;
	var pincode = req.body.pin;
	var city = req.body.city;
	var state = req.body.state;
	var country = req.body.country;
	User.findOne({'name':name},function (err,user) {
		if(err){};
		if(user){
			res.render('user',{user:"user already exists"});
		}
		else{
		
				var user = new User();
				user.aadharid = aadharid;
				user.name = name;
				user.city = city;
				user.state = state;
				user.country = country;
				user.userId = 1+"s";
				user.save(); 
				console.log(user);
				res.render('user',{user:user});
			
		}
		
	})
	
  
});

//--Ends

//registration details validator 
function isValid() {
	return true;
}
//ends
module.exports = router;
