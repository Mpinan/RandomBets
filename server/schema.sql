CREATE DATABASE Todo


CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  password VARCHAR(255),
  email_verified BOOLEAN,
  date_created DATE,
  last_login DATE
);

CREATE TABLE routes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) ,
  method VARCHAR(255),
  origin JSON,
  destination JSON,
  uid INTEGER
);

DELETE FROM users



// psql -U postgres

