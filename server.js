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

server.get('/expenses/:user', (req, res) => {
  // db.query('SELECT * FROM expenses', (err, data) => res.status(200).send(data));
  db.query('SELECT expenses.* FROM expenses JOIN users ON users.id=expenses.user_id WHERE users.username="' + req.params.user + '";', (err, data) => {
    res.status(200).send(data);
  });
});

server.post('/expenses/:user', (req, res) => {
  db.query('Select id FROM users WHERE username="' + req.params.user + '"', (err, data) => {
    req.body.user_id = data[0].id;
    db.query('INSERT INTO expenses SET ?', req.body);
    res.end();
  })
});

server.get('/users/:user', (req, res) => {
  db.query('SELECT password FROM users WHERE username="' + req.params.user +'"', (err, data) => {
    if (data.length === 0) {
      res.status(200).send(false);
    } else {
      res.status(200).send(data[0].password);
    }
  });
});

server.post('/users', (req, res) => {
  console.log(req.body);
  db.query('INSERT INTO users SET ?', req.body);
  res.end();
});

const app = server.listen(3000, function() {
  const host = app.address().address;
  const port = app.address().port;
  console.log('Listening at %s', port);
});