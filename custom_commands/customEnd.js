
exports.command = function(result) {
	var SauceLabs = require("saucelabs");

	var saucelabs = new SauceLabs({
      username: process.env.SAUCE_USERNAME,
      password: process.env.SAUCE_ACCESS_KEY
    });

	var sessionid = this.capabilities['webdriver.remote.sessionid'];
  var jobName = this.options.desiredCapabilities.name;

  saucelabs.updateJob(sessionid, {
    passed: result === 0
  }, function(){});

  console.log("SauceOnDemandSessionID=" + sessionid + " job-name=" + jobName);

  this.end();
};
