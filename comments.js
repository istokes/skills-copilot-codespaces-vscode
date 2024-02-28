// Create web server
// Load the core module http
var http = require('http');
// Create a web server
var server = http.createServer(function(req, res){
  // Set the response header with the content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Send the response body "Hello World"
  res.end('Hello World\n');
});
// Listen on port 3000
server.listen(3000, '
