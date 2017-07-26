const express = require('express');
const parser = require('body-parser');

const server = express();

server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(express.static("client"));

server.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('listening to localhost:3000');
});