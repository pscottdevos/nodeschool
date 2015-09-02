var fs = require('fs');
var path = require('path');

module.exports = function (dirName, ext, callback) {
  fs.readdir(dirName, function (err, list) {
    if (err)
      return callback(err);
    callback(null,  list.filter(function (item) {
      return path.extname(item) === '.' + ext;
    }));
  });
};
