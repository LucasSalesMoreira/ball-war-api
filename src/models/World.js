'use strict'

const { Model } = require('sequelize');

class World extends Model {
    static associate(models) {
        this.hasOne(models.WorldConfig, {
            foreignKey: 'world_id',
            as: 'config'
        });
    }

    static init(sequelize, DataTypes) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(30),
                unique: true,
                allowNull: false,
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
            modelName: 'World',
            tableName: 'world'
        });
    }
}

module.exports = World;