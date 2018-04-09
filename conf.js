exports.config = {
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome', // firefox
        seleniumAddress: 'http://localhost:4444/wd/hub',
        maxInstances: 1,
    },
    params: {
        website: {
            baseUrl: 'https://google.com.au/'
        }
    },

    specs: [
            'tests/featureFiles/**/Verification.feature',
            'tests/featureFiles/**/Verification.feature',
            'tests/featureFiles/**/EmailVerification.feature',
    ],

    cucumberOpts: {
        format: ['json:./reports/cucumber-test-results.json', 'pretty'],
        require: ['./tests/featureFiles/**/*_steps.js','./tests/support/*.js'],
        tags: [],
        ignoreUncaughtExceptions: true,
        profile: false,
        'no-source': true
    },
    ignoreUncaughtExceptions: true,
};