var http = require('http');
var url = require('url');


var parsetime = function (date) {
  return {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  };
};

var unixtime = function (date) {
    return {
      'unixtime': date.getTime()
    };
};

var server = http.createServer(function (request, response) {
  var urlObj = url.parse(request.url, true);
  var date = new Date(urlObj.query.iso);

  if (urlObj.pathname === '/api/parsetime') {
    var time = parsetime(date);
    response.writeHead(200, { 'Content-Type': 'application/json'});
    response.end(JSON.stringify(time));

  } else if (urlObj.pathname === '/api/unixtime') {
    var time = unixtime(date);
    response.writeHead(200, { 'Content-Type': 'application/json'});
    response.end(JSON.stringify(time));

  } else {
    response.writeHead(404, 'Not Found');
    response.end();
  }
  
});
server.listen(process.argv[2]);
