'use strict'
var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');
var path = require('path');
var viewports = require('./../const').viewports;
var imgsList = [];

var exec = require('child_process').exec;
router.post('/', function(req, res, next) {
	var screenshotDateTime = Date.parse(new Date());
	imgsList.length = 0;
	let url = req.body.url;
	url = decodeURIComponent(url);
	exec('casperjs '+path.join(__dirname, '../casperscreens.js') + ' ' + url + ' ' +screenshotDateTime, function(err,stdout,stderr){
		console.log('stdout: ' + stdout);
		
	    if(err) {
	        console.log('error:'+stderr);
	    }
	    else{

	    	for(var i = 0; i < viewports.length; i++){
				imgsList.push({
					full:'/screenshots/' + screenshotDateTime + '/' + viewports[i].name + '-' + viewports[i].viewport.width + 'x' + viewports[i].viewport.height + '_full.png',
					screen: '/screenshots/' + screenshotDateTime + '/' + viewports[i].name + '-' + viewports[i].viewport.width + 'x' + viewports[i].viewport.height + '.png',
					sub: viewports[i].name + "-" + viewports[i].viewport.width + 'x' + viewports[i].viewport.height
				});
			}
	    	res.send({
    			data:imgsList
    		});
	    } 
	});

});

module.exports = router;
