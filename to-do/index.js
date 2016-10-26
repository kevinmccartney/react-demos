var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

// serve static assets
app.use(express.static(__dirname + '/public'));

// handling routes
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
