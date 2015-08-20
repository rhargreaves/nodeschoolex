
module.exports = function(dirName, ext, callback) {

	var fs = require('fs');
	var path = require('path');
	fs.readdir(dirName, function(err, list) {
		if(err) {
			callback(err);
			return;
		}
		var filteredFiles = list.filter(function(file) {
			return path.extname(file) == "." + ext;
		})
	  callback(null, filteredFiles);
	});

};
