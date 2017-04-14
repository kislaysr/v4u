var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonOptions: ['-u'],
  scriptPath: 'B:\\Projects\\v4u\\public',
  args: ['value1', 'value2', 'value3']
};

/* GET home page. */
router.get('/',function (req,res) {
	res.render('index');
})
router.get('/getData',function(req, res, next) {
	PythonShell.run('21.py',options,function (err, results) {
	  if (err){console.log(err);}
	  // results is an array consisting of messages collected during execution
	  console.log('results: %j', results);
	  res.send(results);
	});
  
});









module.exports = router;
