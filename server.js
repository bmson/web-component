// Dependencies
var server = require('reqly');

// Create server
server.connect('./app/', 3333);
server.socket('/', 8080);
