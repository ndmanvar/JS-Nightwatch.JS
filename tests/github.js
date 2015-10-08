var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

  '@tags': ['git'],

  'Demo test GitHub' : function (client) {
    client
      .url('https://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .assert.title('nightwatchjs/nightwatch · GitHub')
      .assert.visible('.container .breadcrumb a span')
      .assert.containsText('.container .breadcrumb a span', 'nightwatch', 'Checking project title is set to nightwatch');
  },

  'Failure demo test Github' : function (client) {
    client
      .url('https://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .assert.title('nightwatchjs/nightwatch · GitHubasdf')
      .assert.visible('.container .breadcrumb a span')
      .assert.containsText('.container .breadcrumb a span', 'nightwatch', 'Checking project title is set to nightwatch');
  },

  afterEach: function(client, done) {

    client.customEnd(client.currentTest.results.failed);

    setTimeout(function(){
      done();
    }, 1000);

  }

};

