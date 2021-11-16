'use strict'

const { Model } = require('sequelize');

class WorldConfig extends Model {
    static associate(models) {
        this.belongsTo(models.World, {
            foreignKey: 'world_id',
            as: 'world'
        });
    }
    
    static init(sequelize, DataTypes) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            background_url: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            visible: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
            code: {
                type: DataTypes.STRING(6),
                allowNull: true
            },
            world_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'world',
                    key: 'id'
                }
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'WorldConfig',
            tableName: 'world_config'
        });
    }
}

module.exports = WorldConfig;