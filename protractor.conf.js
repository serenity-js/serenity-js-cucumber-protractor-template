exports.config = {
    baseUrl: 'https://juliemr.github.io/',

    chromeDriver: require(`chromedriver/lib/chromedriver`).path,

    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),

    specs: [ 'features/**/*.feature' ],

    serenity: {
        // Use Cucumber.js test runner adapter
        // see: https://serenity-js.org/api/cucumber/
        runner: 'cucumber',

        // Configure reporting services
        // see: https://serenity-js.org/handbook/reporting/
        crew: [
            '@serenity-js/console-reporter',
            [ '@serenity-js/serenity-bdd', { specDirectory: './features' } ],
            [ '@serenity-js/web:Photographer',      { strategy: 'TakePhotosOfInteractions'    } ],  // slower execution, more comprehensive reports
            // [ '@serenity-js/web:Photographer',   { strategy: 'TakePhotosOfFailures'        } ],  // fast execution, screenshots only when tests fail
            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],
        ]
    },

    cucumberOpts: {
        require: [
            'features/step_definitions/**/*.steps.ts',
            'features/support/*.ts',
        ],
        requireModule:   [
            'ts-node/register'
        ],
        tags:    ['not @wip'],
        strict:  false,
    },

    /**
     * If you're interacting with a non-Angular application,
     * uncomment the below onPrepare section,
     * which disables Angular-specific test synchronisation.
     */
    // onPrepare: function() {
    //     browser.waitForAngularEnabled(false);
    // },

    capabilities: {
        browserName: 'chrome',

        // see https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#loggingpreferences-json-object
        loggingPrefs: {
            browser: 'SEVERE' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
        },

        chromeOptions: {
            args: [
                '--disable-web-security',
                '--allow-file-access-from-files',
                '--allow-file-access',
                '--disable-infobars',
                '--ignore-certificate-errors',
                '--headless',
                '--disable-gpu',
                '--window-size=1024x768',
            ]
        }
    }
};
