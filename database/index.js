const Sequelize = require('Sequelize');
const db = new Sequelize('reviews', 'root', '');
const User = require('./users.model.js');
const Restaurant = require('./restaurants.model.js');
var Review = require('./reviews.model.js');

User.sync();
Review.sync();
Restaurant.sync();

exports.User = User;
exports.Review = Review;
exports.Restaurant = Restaurant;

// Code below was prior to refactoring with Sequelize
// const mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'guilt_tripadvisor',
//   multipleStatements: true
// });

// connection.connect((err) => {
//   if(!err) {
//     console.log('Connected to database');
//   } else {
//     console.log('Unable to connect to database. ', err);
//   }
// })