"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("inventories", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      water: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      food: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      med_kit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      ammo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("inventories");
  }
};
