var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, str) {
	var newLines = str.split('\n').length-1;
	console.log(newLines);
});
