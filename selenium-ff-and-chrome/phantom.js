var page = require("webpage").create(),
    system = require("system");

page.viewportSize = { width: 1920, height: 768 };

page.open(system.args[1], function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        window.setTimeout(function () {
            page.render("./public/chrome.png");
			phantom.exit();
        }, 1000); // Change timeout as required to allow sufficient time 
    }
});
