var lsFilter = require('./filtered-ls-module');

var dirName = process.argv[2];
var ext = process.argv[3];
lsFilter(dirName, ext, function(err, fList) {
  if (err) {
    return console.error('There was an error reading the directory', err);
    return;
  }
  fList.forEach(function (file) {
    console.log(file);
  });
});
