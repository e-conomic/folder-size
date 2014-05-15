var fs = require('fs');
var path = require('path');

var readdir = function(dir, data, options, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) return callback(err)
		
		list = list.filter(function(filename) {
			return !(options.ignoreHidden && filename.indexOf('.') === 0);
		});

		(function loop() {
			var filename = list.pop();

			if (!filename) return callback(null, data);

			fs.stat(path.join(dir, filename), function(err, stat) {
				if (stat.isDirectory()) {
					readdir(path.join(dir, filename), data, options, function(err, data) {
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

module.exports = function(dir, options, callback) {
	if (!callback) return module.exports(dir, {}, options);

	readdir(dir, {}, options, callback);
};