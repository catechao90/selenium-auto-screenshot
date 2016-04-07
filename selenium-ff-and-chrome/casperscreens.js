var casper = require('casper').create({
  verbose: false,
  logLevel: "debug"
});

var viewports = require('./const').viewports;

var imgList = [];
screenshotUrl = casper.cli.args[0];
screenshotDateTime = casper.cli.args[1];

casper.start(screenshotUrl, function() {
  this.echo('Current location is ' + this.getCurrentUrl(), 'info');
});

casper.each(viewports, function(casper, viewport) {
  	this.then(function() {
    	this.viewport(viewport.viewport.width, viewport.viewport.height);
  	});
  	this.thenOpen(screenshotUrl, function() {
    	this.wait(4000);
  	});
  	this.then(function(){
	    // this.echo('Screenshot for ' + viewport.name + ' (' + viewport.viewport.width + 'x' + viewport.viewport.height + ')', 'info');
	    this.capture('./public/screenshots/' + screenshotDateTime + '/' + viewport.name + '-' + viewport.viewport.width + 'x' + viewport.viewport.height + '.png', {
	        top: 0,
	        left: 0,
	        width: viewport.viewport.width,
	        height: viewport.viewport.height
	    });
	    this.captureSelector('./public/screenshots/'+ screenshotDateTime + '/' + viewport.name + '-' + viewport.viewport.width + 'x' + viewport.viewport.height + '_full.png', 'body');
  	});
});

casper.run(function() {
    this.echo('Finished captures for ' + screenshotUrl + " " + screenshotDateTime).exit();
});