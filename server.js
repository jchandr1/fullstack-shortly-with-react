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

server.get('/expenses', (req, res) => {
  db.query('SELECT * FROM expenses', (err, data) => res.status(200).send(data));
});

server.post('/expenses', (req, res) => {
  db.query('INSERT INTO expenses SET ?', req.body);
  res.end();
});

server.get('/users/:user', (req, res) => {
  console.log(req.params.user);
  db.query('SELECT password FROM users', (err, data) => res.status(200).send(data));
});

server.post('/users', (req, res) => {
  db.query('INSERT INTO users SET ?', req.body);
  res.end();
});

const app = server.listen(3000, function() {
  const host = app.address().address;
  const port = app.address().port;
  console.log('Listening at %s', port);
});