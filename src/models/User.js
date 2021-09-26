'use strict';

const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/connectionFactory');

class User extends Model {
    static associate(models) {}
};

User.init({     
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nick: {
        type: Sequelize.DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    },
    icon_url: {
        type: Sequelize.DataTypes.TEXT
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
    modelName: 'User',
    tableName: 'user'
});

module.exports = User;