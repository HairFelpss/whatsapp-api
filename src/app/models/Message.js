module.exports = (sequelize, DataTypes) => {
  const cp_tickets_messages = sequelize.define('cp_tickets_messages', {
    content: DataTypes.STRING,
  });

  cp_tickets_messages.associate = (models) => {
    cp_tickets_messages.belongsTo(models.cp_ticket, {
      foreignKey: 'cp_ticket_id',
      as: 'ticket',
    });
    cp_tickets_messages.belongsTo(models.User, {
      foreignKey: 'writer_id',
      as: 'user',
    });
  };
  return cp_tickets_messages;
};
