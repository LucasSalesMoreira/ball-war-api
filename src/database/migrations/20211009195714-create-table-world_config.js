'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('world_config', { 
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('world_config');
  }
};
