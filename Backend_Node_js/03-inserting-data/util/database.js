const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete','root','raghuveer',{dialect: 'mysql',host: 'localhost'}); 
module.exports = sequelize;

