var test = require('tape');
var folderSize = require('../index');

test('simple', function (t) {
	t.plan(1);

	folderSize('tests/testdata', function(err, data) {
		t.ok(data.txt);
	});
});

test('recursive size', function (t) {
	t.plan(2);

	folderSize('tests/testdata', function(err, data) {
		t.equals(data.data.bytes, 7);
		t.equals(data.data.files, 2);
	});
});