"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("survivors", "inventory_id", {
      type: Sequelize.INTEGER,
      references: { model: "inventories", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("survivors", "inventory_id");
  }
};
