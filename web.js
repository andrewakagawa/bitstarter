var express = require('express');
var app = express();
var fs = require('fs'); 
app.use(express.logger());

app.get('/', function(request, response) {
    buf=fs.readFileSync('index.html');
    response.send(buf.toString('utf8', 0, buf.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
