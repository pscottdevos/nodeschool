var fs = require('fs');

fs.readFile(process.argv[2] , 'utf8', function (err, string) {
  if (!err) {
    console.log(string.split('\n').length - 1);
  }
})
