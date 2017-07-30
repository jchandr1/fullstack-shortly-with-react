DROP DATABASE IF EXISTS budget;

CREATE DATABASE budget;

USE budget;

DROP TABLE IF EXISTS expenses;
DROP TABLE IF EXISTS funds;
DROP TABLE IF EXISTS users;

CREATE TABLE expenses (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(50),
  cost INTEGER,
  currency VARCHAR(3),
  USDVal INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE fundsLeft (
  id INTEGER AUTO_INCREMENT,
  amt INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(50)
);

INSERT INTO users (username, password) VALUE ("justin", "justin");