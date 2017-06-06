//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//globals
var port = process.env.PORT || 5678; // assign a port for the app , what is this process environment's port? needed to run on Heroku

//spin up server
app.listen(port, function() {
  console.log('server is up on', port);
});

//base url
app.get('/', function(req, res){
  console.log('connected');
  res.sendFile( path.resolve( 'views/index.html' ) );
});
