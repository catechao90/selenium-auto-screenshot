'use strict'
var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');

var exec = require('child_process').exec;


router.post('/', function(req, res, next) {
	let url = req.body.url;
	url = decodeURIComponent(url);
	exec('python ff.py '+ url, function(err,stdout,stderr){
	    if(err) {
	        console.log('error:'+stderr);
	    }
	    else{
	    	res.send({
    			ff:"ff.png"
    		});
	    } 
	});    
});

module.exports = router;
