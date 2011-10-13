var http = require ('http');

var server = http.createServer (
  function (req, res) {// callback is executed each time a request is made to
    // the server
    // header return
    res.writeHead (200, {'content-type': 'text/plain'});

    res.write ("Hello\n");
    setTimeout (function () {
      res.end ("world!\n");
    }, 2000);
  }
);

// port to listen to
server.listen (8000);

