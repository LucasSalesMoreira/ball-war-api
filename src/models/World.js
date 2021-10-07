'use strict'

const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/connectionFactory');

class World extends Model {
    static associate(models) { }
};

World.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    },
    created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'World',
    tableName: 'world'
});

module.exports = World;