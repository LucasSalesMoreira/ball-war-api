const Sequelize = require('sequelize');
const config = process.env.isProduction ? 
    require('../configs/database').production 
    : require('../configs/database').development;

const { database, user, password } = config;

module.exports = new Sequelize(database, user, password, config);