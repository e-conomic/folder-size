var fs = require('fs');
var path = require('path');
var dir = 'z:/SourceCode/econ/';

var options = {
	ignoreHidden: true
};


var readdir = function(dir, data, callback) {
	if (!callback) return readdir(dir, {}, data);

	fs.readdir(dir, function(err, list) {
		list = list.filter(function(filename) {
			return !(options.ignoreHidden && filename.indexOf('.') === 0);
		});

		(function loop() {
			var filename = list.pop();

			if (!filename) return callback(data);

			fs.stat(path.join(dir, filename), function(err, stat) {
				if (stat.isDirectory()) {
					readdir(path.join(dir, filename), data, function(err, data) {
						loop();
					});
					return;
				}

				var ext = filename.split('.').pop().toLowerCase();

				data[ext] = data[ext] || { bytes: 0, files: 0 };
				data[ext].bytes += stat.size;
				data[ext].files++;

				loop();
			});
		})();
	});
};

readdir(dir, console.log);