define({
	capabilities: {
		project: 'Intern Repeated Test',
		name: 'iOS-intern-test'
	},

	environments: [
		{ browserName: 'iphone', version: '9.3', deviceName: 'iPhone 6' }
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
