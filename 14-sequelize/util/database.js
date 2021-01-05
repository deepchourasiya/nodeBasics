const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'akashdeep', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
