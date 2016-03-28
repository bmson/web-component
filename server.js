// Local dependencies
var server = require('reqly');

// Create server
server.connect('./app/', 3333);

// Bridge webcomponents.js
server.get('/webcomponents.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/webcomponents.js/webcomponents.js');
});
