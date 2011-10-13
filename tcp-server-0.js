var net = require ('net');

var server = net.createServer (function (socket) {
  socket.write ("Hello\r\n");
  socket.write ("world!\n");

  socket.on ('data', function (data) {
    socket.write (data);
  })

});

server.listen (8000);
