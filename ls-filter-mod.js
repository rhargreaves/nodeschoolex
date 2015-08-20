var filterFiles = require('./mymodule');
filterFiles(process.argv[2], process.argv[3], function(err, list) {
  if(err) {
    console.log(err);
    return;
  }
  list.forEach(function(file) {
    console.log(file);
  });
});
