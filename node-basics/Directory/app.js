var filterDir = require('./filterDir');

var dirPath = process.argv[2];
var extension = '.' + process.argv[3];

filterDir(dirPath, extension, function(err, list) {
  if (err) throw err;
  console.log(list);
})