var express = require('express');

var app = express.createServer(express.logger());

var fs = require ("fs");

var file_handle = fs.openSync("index.html");


var buf=new Buffer (fs.readFileSync(file_handle));

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, buffer.length);
);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
