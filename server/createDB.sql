DROP DATABASE IF EXISTS weatherApp;
CREATE DATABASE weatherApp;

\c weatherApp;

CREATE TABLE user (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR,
  lastName VARCHAR,
  pass VARCHAR
);

INSERT INTO user (firstName, lastName, pass,)
  VALUES ('Aaron', 'Flower', 'pass');