const { computeExecutablePath } = require('@puppeteer/browsers')
const { resolve } = require('path')

// Chrome 129 is the last version that correctly supports Selenium 3
// Chrome 130 and later require Selenium 4 for browser.executeScript to correctly resolve WebElement arguments
const chromeVersion = '129';

const binaries = {
    chromedriver: computeExecutablePath({ browser: 'chromedriver', buildId: chromeVersion, cacheDir: '.' }),
    chrome: computeExecutablePath({ browser: 'chrome', buildId: chromeVersion, cacheDir: '.' }),
}

exports.config = {
    baseUrl: 'https://juliemr.github.io/',

    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,

    chromeDriver: binaries.chromedriver,

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
     * Hook to enable ChromeDriver verbose logging
     */
    beforeLaunch: function() {
        // Enable verbose ChromeDriver logging to stderr/stdout
        process.env.SELENIUM_VERBOSE = 'true';
        process.env.CHROMEDRIVER_VERBOSE = '1';
    },

    /**
     * Hook to print driver logs after tests complete
     */
    onComplete: async function() {
        try {
            const logs = await browser.manage().logs().get('driver');
            if (logs && logs.length > 0) {
                console.log('\n' + '='.repeat(80));
                console.log('ChromeDriver Logs:');
                console.log('='.repeat(80));
                logs.forEach(function(entry) {
                    console.log('[%s] %s - %s', entry.level.name, new Date(entry.timestamp).toISOString(), entry.message);
                });
                console.log('='.repeat(80) + '\n');
            } else {
                console.log('\nNo ChromeDriver logs available');
            }
        } catch (e) {
            console.log('\nCould not retrieve ChromeDriver logs:', e.message);
        }
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
            // browser: 'SEVERE' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
            browser: 'ALL', // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
            driver: 'ALL'   // Enable ChromeDriver logging
        },

        chromeOptions: {
            w3c: false,
            binary: binaries.chrome,
            excludeSwitches: [ 'enable-automation' ],
            args: [
                '--disable-web-security',
                '--allow-file-access-from-files',
                '--allow-file-access',
                '--disable-infobars',
                '--ignore-certificate-errors',
                '--headless',
                '--disable-gpu',
                '--window-size=1024x768',
                // Additional flags for CI environments (GitHub Actions, etc.)
                '--no-sandbox',                     // Required for running as root in Docker/CI
                '--disable-dev-shm-usage',          // Overcome limited resource problems
                '--disable-setuid-sandbox',         // Additional sandbox disabling for CI
                '--remote-debugging-port=9222',     // Helps with DevToolsActivePort issues
            ]
        }
    }
};
