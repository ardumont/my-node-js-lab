var net = require ('net');

var sockets = [];

var s = net.Server (function (socket) {
  // add the sockets in the array to know where to broadcast
  sockets.push (socket);
  // on reception of data
  socket.on ('data', function (d) {
    for (var i=0;i<sockets.length; i++) {
      // broadcast to all but me
      if(sockets [i] == socket) {
        continue;
      }
      sockets [i].write (d);
    }
  });
  // on socket close
  socket.on ('close', function () {
    // find the socket to remove from the array
    var i = sockets.indexOf (socket);
    //delete sockets[i];
    sockets.splice (i, 1);
  })

});

s.listen (8000);

