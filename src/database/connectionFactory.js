const Sequelize = require('sequelize');
const config = process.env.isProduction ? 
    require('../configs/database').production 
    : require('../configs/database').development;

const { database, user, password } = config;
const connection = new Sequelize(database, user, password, config);

const World = require('../models/World');
const WorldConfig = require('../models/WorldConfig');

World.init(connection, Sequelize.DataTypes);
WorldConfig.init(connection, Sequelize.DataTypes);

World.associate(connection.models);
WorldConfig.associate(connection.models);

module.exports = connection;