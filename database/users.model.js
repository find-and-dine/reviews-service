// // const Sequelize = require('sequelize');
// const db = require('./index.js'), sequelize = db.sequeliz, Sequelize = db.Sequelize;

const db = require('./index.js'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const User = db.define('user', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  avatarURL: {
    type: Sequelize.STRING(500),
  },
  reviewsCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  postsCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  helpfulVotesCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  loc: {
    type: Sequelize.STRING(50)
  },
  lev: {
    type: Sequelize.INTEGER
  }
});

module.exports = User;