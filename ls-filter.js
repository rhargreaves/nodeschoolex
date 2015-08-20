var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, list) {
	for(var n = 0; n < list.length; n++) {
		var fileName = list[n];
		if(path.extname(fileName) == "." + process.argv[3]){
			console.log(fileName);
		}
	}
});
