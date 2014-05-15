# folder-size

## Installation
`npm install folder-size`

## Usage
``` js
var folderSize = require('folder-size');
folderSize('./some-dir', { ignoreHidden: true }, function(err, data) {
	console.log(err, data);
});
```
## Options

### ignoreHidden
Ignores files and folders that begins with `.`

## License
MIT