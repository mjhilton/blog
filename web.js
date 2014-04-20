var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/articles/0 - Home.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/css/home.css', function(req, res) {
    fs.readFile(__dirname + '/css/home.css', 'utf8', function(err, text){
        res.send(text);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
