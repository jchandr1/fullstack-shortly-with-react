const express = require('express');
const parser = require('body-parser');

const server = express();

server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(express.static("client"));

server.get('/', (req, res) => {
  res.send('You are at the start of all things');
});

server.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('listening to localhost:3000');
});