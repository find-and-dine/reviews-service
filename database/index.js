const Sequelize = require('sequelize');

const sequelize = new Sequelize('guilt_tripadvisor', 'root', '', {
    dialect: 'mysql',
});

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('reviews', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const db = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// const User = require('./users.model.js');
// const Restaurant = require('./restaurants.model.js');
// const Review = require('./reviews.model.js');

// module.exports = {
//   User: User,
//   Review: Review,
//   Restaurant: Restaurant,
//   db: db
// }

// exports.User = User;
// exports.Review = Review;
// exports.Restaurant = Restaurant;
// exports.db = db;

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