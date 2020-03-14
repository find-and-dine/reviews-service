const Sequelize = require('sequelize');
const db = require('./index.js');

const Restaurant = db.define('restaurant', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  restaurantName: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  claimed: {
    type: Sequenlize.BOOLEAN,

  }
});

module.exports = Restaurant;