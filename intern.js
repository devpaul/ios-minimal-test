define([], function () {
	// From the configurator https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
	var caps = {};
	caps['browserName'] = 'Safari';
	caps['appiumVersion'] = '1.6.3';
	caps['deviceName'] = 'iPhone 6 Simulator';
	caps['deviceOrientation'] = 'portrait';
	caps['platformVersion'] = '10.0';
	caps['platformName'] = 'iOS';

	return {
		capabilities: {
			project: 'Intern Repeated Test',
			name: 'iOS-intern-test'
		},

		environments: [
			caps
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
	};
});
