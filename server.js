// Dependencies
var server = require('reqly');

// Create server
server.connect('./app/', 3333);
//server.socket(3000);

//
//var socket = new Socket()
//socket.listen(3000);

/*
//
server.bridge('/webcomponents.js', '/node_modules/webcomponents.js/webcomponents.js');

//
server.post('/socket', function(req, res) {
  server.emit('response', { 'message': req });
});
*/

// Bridge webcomponents.js
server.get('/webcomponents.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/webcomponents.js/webcomponents.js');
});
