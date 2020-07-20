'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'cp_rank_id', {
      type: Sequelize.INTEGER,
      references: { model: 'cp_ranks', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'cp_rank_id');
  },
};
