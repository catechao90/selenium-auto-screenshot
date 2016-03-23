var exec = require('child_process').exec;
var cmdStr = 'python ff.py http://www.zhan.com';


var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path
 
var childArgs = [
  path.join(__dirname, 'phantom.js'),
  'http://www.zhan.com'
]

exec(cmdStr, function(err,stdout,stderr){
    if(err) {
        console.log('error:'+stderr);
    }
    else{
    	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  		  	if(err) {
  		        console.log('error:'+stderr);
  		    }
  		    else{
  		    	console.log('all done!');
  		    } 
		    })
      } 
});






