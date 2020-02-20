"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("inventory", {
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
      medKit: {
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
    return queryInterface.dropTable("inventory");
  }
};
