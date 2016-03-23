'use strict'
var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');
var url = require('url');
var exec = require('child_process').exec;


router.get('/', function(req, res, next) {
	var queryParam = url.parse(req.url, true).query;
	var pageUrl = decodeURIComponent(queryParam.url);
	exec('python ie.py '+ pageUrl, function(err,stdout,stderr){
	    if(err) {
	        console.log('error:'+stderr);
	    }
	    else{
	    	res.jsonp({
    			ie:"IE.png"
    		});
	    } 
	});    
});

module.exports = router;
