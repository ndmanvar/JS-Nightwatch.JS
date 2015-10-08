
exports.command = function(result) {
	var SauceLabs = require("saucelabs");

	var saucelabs = new SauceLabs({
      username: process.env.SAUCE_USERNAME,
      password: process.env.SAUCE_ACCESS_KEY
    });

	var sessionid = this.capabilities['webdriver.remote.sessionid'];

  saucelabs.updateJob(sessionid, {
    passed: result === 0
  }, function(){});

  this.end();
};
