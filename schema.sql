DROP DATABASE IF EXISTS budget;

CREATE DATABASE budget;

USE budget;

DROP TABLE IF EXISTS expenses;
DROP TABLE IF EXISTS funds;

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

INSERT INTO expenses (name, cost, currency, USDVal) VALUES ("food", "100", "USD", "100");
INSERT INTO expenses (name, cost, currency, USDVal) VALUES ("parking", "20", "USD", "20");
INSERT INTO expenses (name, cost, currency, USDVal) VALUES ("board", "200", "USD", "200");