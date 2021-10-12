'use strict'

const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/connectionFactory');

class WorldConfig extends Model {
    static associate(models) {
        this.belongsTo(models.World, {
            foreignKey: 'world_id',
            sourceKey: 'id'
        });
    }
};

WorldConfig.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    background_url: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    visible: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
    },
    code: {
        type: Sequelize.DataTypes.STRING(6),
        allowNull: true
    },
    world_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'world',
            key: 'id'
        }
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
    modelName: 'WorldConfig',
    tableName: 'world_config'
});

module.exports = WorldConfig;