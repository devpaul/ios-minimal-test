define({
	capabilities: {
		project: 'Intern Repeated Test',
		name: 'iOS-intern-test'
	},

	environments: [
		// From the configurator https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
		{ browserName: 'Safari', appiumVersion: '1.6.3', deviceName: 'iPhone 6 Simulator',
			deviceOrientation: 'portrait', platformVersion: '9.3', platformName: 'iOS' }
		// Typical Intern config
		// { browserName: 'iphone', version: '9.3', deviceName: 'iPhone 6', appiumVersion: '1.6.3' }
		// Chrome config to show it works on Selenium
		// { browserName: 'chrome' }
	],

	tunnel: 'SauceLabsTunnel',

	loaderOptions: {
		packages: [ { name: 'tests', location: '.' } ]
	},

	suites: [ 'tests/stress' ],

	functionalSuites: [ ],

	excludeInstrumentation: true
});
