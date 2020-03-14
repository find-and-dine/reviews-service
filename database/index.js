const Sequelize = require('sequelize');

const sequelize = new Sequelize('guilt_tripadvisor', 'root', '', {
    dialect: 'mysql',
});

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;