var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  body = '';
  response.on('data', function (data) {
    body += data;
  });
  response.on('error', console.error)
  response.on('end', function () {
    console.log(body.length);
    console.log(body);
  });
});
