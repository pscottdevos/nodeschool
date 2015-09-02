var fs = require('fs');
var path = require('path');

var file = process.argv[2];
var ext = process.argv[3];
fs.readdir(file, function (err, list) {
  if (err) {
    throw err;
  } else {
    var fList = list.filter(function (item) {
      return path.extname(item) === '.' + ext;
    });
    for (i = 0; i < fList.length; i++) {
      console.log(fList[i]);
    }
  }
});
