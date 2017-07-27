const express = require('express');
const parser = require('body-parser');

const server = express();

server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(express.static("client"));

server.get('/', (req, res) => {
  res.send('You are at the start of all things<br>' +
    'Ask for input of initial budget allowance then add to budget table');
});

server.get('/budget', (req, res) => {
  res.send('Show expenses from expenses table, budget from budget table' + 
    ', have form to add expense');
});

server.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('listening to localhost:3000');
});