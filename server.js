var express = require('express');
var path = require('path');

// Create the app
var app = express();

// Set up the server
var server = app.listen(3000, listen);

//Set root
app.use(express.static('public'));

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Application listening at http://' + host + ':' + port);
}

app.use(express.static(path.join(__dirname, 'public'))); // Set the directory where static files are stored 
