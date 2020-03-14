const db = require('./index.js'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const Restaurant = sequelize.define('restaurant', {
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
    type: Sequelize.BOOLEAN,

  }
});

module.exports = Restaurant;