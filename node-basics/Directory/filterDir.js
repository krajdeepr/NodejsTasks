var fs = require('fs');
var path = require('path');

var filterDir = (dirPath, extension, cb) => {
  fs.readdir(dirPath,(err, list) => {
    if (err) return cb(err);

    var filtered = list.map(fileName => {
      return path.join(dirPath, fileName);
    }).filter( filePath => {
      return path.extname(filePath) === extension;
    })

    cb(null, filtered);
  })
}

module.exports = filterDir;