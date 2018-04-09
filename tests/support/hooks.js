var conf = require('../../conf');
var applicationUrl = conf.config.params.website.baseUrl;
var hooks = function () {
    this.registerHandler('BeforeFeature', function(feature){
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.get(applicationUrl);
    });

    this.registerHandler('AfterFeature', function(feature){
        return browser.get(applicationUrl);
    });
};

module.exports = hooks;
