DROP DATABASE IF EXISTS guilt_tripadvisor;

CREATE DATABASE guilt_tripadvisor;

USE guilt_tripadvisor;

/* Create other tables and define schemas for them here! */

CREATE TABLE ads (
  _id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  imageURL VARCHAR(500) NOT NULL
);

CREATE TABLE users (
  _id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(100) NOT NULL,
  avatarURL VARCHAR(500),
  reviewCount INT DEFAULT 0 NOT NULL,
  postsCount INT DEFAULT 0 NOT NULL,
  helpfulVotesCount INT DEFAULT 0 NOT NULL,
  loc VARCHAR(50),
  lev TINYINT
);

CREATE TABLE restaurants (
  _id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  restaurantName VARCHAR(100) NOT NULL,
  claimed BOOLEAN
);

CREATE TABLE staff (
  _id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  staffName VARCHAR(100) NOT NULL,
  position VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
  _id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  _restaurantID INT NOT NULL,
  _userID INT NOT NULL,
  title VARCHAR(120) NOT NULL,
  body TEXT NOT NULL,
  timePosted TIMESTAMP NOT NULL,
  monthVisted VARCHAR(14) NOT NULL,
  hereFor VARCHAR(15),
  votes INT DEFAULT 0 NOT NULL,
  device VARCHAR(50),
  travelerType VARCHAR(8),
  lang VARCHAR(50),
  rating DECIMAL(2, 1) NOT NULL,
  serviceRating DECIMAL(2, 1),
  foodRating DECIMAL (2, 1),
  valueRating DECIMAL (2, 1),
  _staffResponseID INT,
  FOREIGN KEY(_restaurantID) REFERENCES restaurants(_id),
  FOREIGN KEY(_userID) REFERENCES users(_id),
  FOREIGN KEY(_staffResponseID) REFERENCES staff(_id)
);

CREATE TABLE staffResponses (
  _id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  _restaurantID INT NOT NULL,
  _reviewID INT NOT NULL,
  responseDate DATE NOT NULL,
  body TEXT NOT NULL,
  _staffID INT NOT NULL,
  FOREIGN KEY(_restaurantID) REFERENCES restaurants(_id),
  FOREIGN KEY(_reviewID) REFERENCES reviews(_id),
  FOREIGN KEY(_staffID) REFERENCES staff(_id)
);

CREATE TABLE photos (
  _id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  _restaurantID INT NOT NULL,
  _userID INT NOT NULL,
  _reviewID INT NOT NULL,
  votes INT NOT NULL,
  title VARCHAR(100),
  imageURL VARCHAR(500),
  FOREIGN KEY(_restaurantID) REFERENCES restaurants(_id),
  FOREIGN KEY(_userID) REFERENCES users(_id),
  FOREIGN KEY(_reviewID) REFERENCES reviews(_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

