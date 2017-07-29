const express = require('express');
const server = express();
const parser = require('body-parser');
const db = require('./db');
const axios = require('axios');
const apiUrl = 'http://api.fixer.io';

server.use(express.static(__dirname + '/www'));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

server.get('/expense', (req, res) => {
  db.query('SELECT * FROM expenses', (err, data) => res.status(200).send(data));
});

server.post('/expense', (req, res) => {
  axios.get(apiUrl + '/latest?symbols=USD,' + req.body.currency)
  .then(response => {
    req.body.USDVal = req.body.cost * response.data.rates.USD / (response.data.rates[req.body.currency] || 1);
    db.query('INSERT INTO expenses SET ?', req.body);
  })
  .catch(err => console.log(err));
});

const app = server.listen(3000, function() {
  const host = app.address().address;
  const port = app.address().port;
  console.log('Listening at %s', port);
});