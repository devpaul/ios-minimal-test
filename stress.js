define([
	'intern!bdd',
	'intern/chai!assert'
], function (bdd, assert) {
	var num = 10000;

	bdd.describe('stress', function () {
		for (var i = num; i > 0; i--) {
			bdd.it('test ' + i, function () {
				assert.isTrue(true);
			});
		}
	});
});
