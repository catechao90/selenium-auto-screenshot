'use strict'
var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');
var url = require('url');
var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path')

router.get('/', function(req, res, next) {
	var queryParam = url.parse(req.url, true).query;
	var pageUrl = decodeURIComponent(queryParam.url);
	fs.exists(path.join(__dirname, '../public/IE8.png'), function(exists) {
	  	if(exists) {
		    //Show in green
		    console.log('File exists. Deleting now ...');
		    fs.unlink(path.join(__dirname, '../public/IE8.png'));
	  	}
	});
	exec('python ie.py '+ pageUrl, function(err,stdout,stderr){
	    if(err) {
	        console.log('error:'+stderr);
	    }
	    else{
	    	res.jsonp({
    			ie:"IE8.png"
    		});
	    } 
	});    
});

module.exports = router;
