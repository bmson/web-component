// Dependencies
var server = require('reqly');

// Create server
server.connect('./app/', 3333);

//
server.bridge('/webcomponents.js', __dirname + '/node_modules/webcomponents.js/webcomponents.js');

//
server.ws('/collaborate', socket => {
  console.log('collaborate');
  socket.on('response', msg => socket.send(msg));
});
