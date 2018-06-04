### Schema

CREATE DATABASE drinks_db;

USE drinks_db;

CREATE TABLE drinks
(
	id int NOT NULL AUTO_INCREMENT,
	drink_name varchar(255) NOT NULL,
	sipped boolean,
	PRIMARY KEY (id)
);
