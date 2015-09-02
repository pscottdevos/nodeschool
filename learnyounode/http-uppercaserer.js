var fs = require('fs');
var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response) {
  if (request.method != 'POST') {
    response.writeHead(405, 'Method Not Allowed');
    return response.end();
  }
  response.writeHead(200, { 'content-type': 'text/plain' });
  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});
server.listen(process.argv[2]);
