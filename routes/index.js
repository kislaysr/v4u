var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');
var jsonfile = require('jsonfile');
var options = {
  mode: 'text',
  pythonOptions: ['-u'],
  scriptPath: 'B:\\Projects\\v4u\\public',
  args: ['value1', 'value2', 'value3']
};
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

/* GET home page. */
router.get('/',function (req,res) {
	res.render('index');
})
router.get('/getData',function(req, res, next) {
	var inputFile='B:\\Projects\\v4u\\public\\e21.csv';
	var arr = [];
	var parser = parse({delimiter: ','}, function (err, data) {
	  
	  async.eachSeries(data, function (line, callback) {
	  	
	  	obj = {};
	  	obj.title = line[0];
	  	obj.description = line[1];
	  	arr.push(obj);
	  	console.log("obj:",obj);
	  	callback();
	    // do something with the line
	  
	  });
	});
	fs.createReadStream(inputFile).pipe(parser);

});
function doSomething(line) {
	console.log("line:",line);
}








module.exports = router;
