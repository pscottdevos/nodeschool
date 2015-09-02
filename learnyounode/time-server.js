var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  var date = new Date();
  socket.end(strftime('%Y-%m-%d %H:%M', new Date()));
});
server.listen(process.argv[2]);
