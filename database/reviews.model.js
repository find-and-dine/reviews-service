const Sequelize = require('sequelize');
const db = require('./index.js');
const User = require('/users.model.js');
const Restaurant = require('/restaurants.model.js');

const Review = db.define('review', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  timePosted: {
    type: Sequelize.DATE,
    allowNull: false
  },
  monthVisited: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  hereFor: {
    type: Sequelize.TEXT,
  },
  votes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  device: {
    type: Sequelize.TEXT,
  },
  travelerType: {
    type: Sequelize.TEXT,
  },
  lang: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.DECIMAL(2, 1),
    allowNull: false
  },
  serviceRating: {
    type: Sequelize.DECIMAL(2, 1),
  },
  foodRating: {
    type: Sequelize.DECIMAL(2, 1),
  },
  valueRating: {
    type: Sequelize.DECIMAL(2, 1),
  }
});

Review.belongsTo(Restaurant);
Review.belongsTo(User);

module.exports = Review;