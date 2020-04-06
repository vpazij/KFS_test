const timeout = 260000;
exports.config = {
	directConnect : false,
	framework : 'jasmine2',
    multiCapabilities: [
        {
             browserName: 'chrome',
             specs: ['./specs/practice.js'],
             name: 'first'
        },
    ],

    onPrepare: () => {
    
        return browser.getProcessedConfig().then(() => {   
            browser.ignoreSynchronization = true;
            browser.manage().timeouts().setScriptTimeout(timeout);
            browser.manage().timeouts().pageLoadTimeout(timeout);
            browser.manage().timeouts().implicitlyWait(15000);
            browser.manage().deleteAllCookies();
            browser.manage().window().setSize(1920, 1080);
        });
    },

	jasmineNodeOpts : {
        getPageTimeout: 210000,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: timeout
    },

    params: {
        timeout: {
            urlChangeTimeout: 60 * 1000,
            elementVisibilityTimeout: 5 * 3000,
            elementInvisibilityTimeout: 5 * 1000
        }
    }
};
