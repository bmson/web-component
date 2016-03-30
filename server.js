// Dependencies
var server = require('reqly');

// Create server
server.connect('./app/', 3333);

/*
//
server.bridge('/webcomponents.js', '/node_modules/webcomponents.js/webcomponents.js');

//
server.ws('/collaborate', socket => {
  socket.on('message', msg => socket.send(msg));
})

*/

// Bridge webcomponents.js
server.get('/webcomponents.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/webcomponents.js/webcomponents.js');
});
