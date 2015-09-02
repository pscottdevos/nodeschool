var http = require('http');

var urls = process.argv.slice(2);
var results = {};
var endCnt = 0;

urls.forEach(function (url) {
  http.get(url, function (response) {
    response.setEncoding('utf8');
    var result = '';
    response.on('error', function(err) { return console.log(err); });
    response.on('data', function(data) { result += data; });
    response.on('end', function() {
      results[url] = result;
      endCnt++;
      if (endCnt >= 3) {
        urls.forEach(function (url) {
          console.log(results[url]);
        });
      }
    });
  });
});
