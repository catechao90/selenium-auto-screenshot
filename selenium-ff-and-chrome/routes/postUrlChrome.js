'use strict'
var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');

var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path


router.post('/', function(req, res, next) {
	let url = req.body.url;
	url = decodeURIComponent(url);
	var childArgs = [
	  	path.join(__dirname, '../phantom.js'),
	  	url
	]
	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
	  	if(err) {
	        console.log('error:'+stderr);
	    }
	    else{
	    	res.send({
    			chorme:"chrome.png"
    		});
	    } 
    })
});

module.exports = router;
