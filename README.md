Archived
======
Tech Leads: Repository archived due to inactivity in more than 6 months.
Please remember to add a CODEOWNERS file to the root of the repository when unarchiving.

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
