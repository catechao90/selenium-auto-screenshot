'use strict'
var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');
var path = require('path');
var viewports = require('./../const').viewports;
var imgsList = [];
for(var i = 0; i < viewports.length; i++){
	imgsList.push({
		full:'/screenshots/' + viewports[i].name + '-' + viewports[i].viewport.width + 'x' + viewports[i].viewport.height + '_full.png',
		screen: '/screenshots/' + viewports[i].name + '-' + viewports[i].viewport.width + 'x' + viewports[i].viewport.height + '.png',
		sub: viewports[i].name + "-" + viewports[i].viewport.width + 'x' + viewports[i].viewport.height
	});
}

var exec = require('child_process').exec;
router.post('/', function(req, res, next) {
	let url = req.body.url;
	url = decodeURIComponent(url);
	exec('casperjs '+path.join(__dirname, '../casperscreens.js')+' '+ url, function(err,stdout,stderr){
		console.log('stdout: ' + stdout);
	    if(err) {
	        console.log('error:'+stderr);
	    }
	    else{
	    	res.send({
    			data:imgsList
    		});
	    } 
	});

});

module.exports = router;
