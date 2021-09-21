'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('user', { 
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('user');
  }
};