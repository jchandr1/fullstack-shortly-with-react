const express = require('express');
const server = express();
const parser = require('body-parser');

server.use(express.static(__dirname + '/www'));
server.use(parser.urlencoded({ extended: true }));
server.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});


const app = server.listen(3000, function() {
  const host = app.address().address;
  const port = app.address().port;
  console.log('Listening at %s', port);
});