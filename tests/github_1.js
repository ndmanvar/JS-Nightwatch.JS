module.exports = {
  tags: ['git'],
  'Demo test GitHub_1' : function (client) {
    client
      .url('https://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .assert.title('nightwatchjs/nightwatch · GitHub')
      .assert.visible('.container .breadcrumb a span')
      .assert.containsText('.container .breadcrumb a span', 'nightwatch', 'Checking project title is set to nightwatch');
  },

  'Failure demo test Github_1' : function (client) {
    client
      .url('https://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .assert.title('nightwatchjs/nightwatch · GitHub abc')
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
