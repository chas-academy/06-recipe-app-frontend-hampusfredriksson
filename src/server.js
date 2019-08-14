const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/assets', function(req, res) {
  res.sendFile(__dirname + '/dist/assets');
});
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist.index.html');
});

const port = proccess.env.PORT || 8080;
app.lisdten(port, function() {
  console.log('server running on port ' + port + '.');
});
