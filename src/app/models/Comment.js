module.exports = (sequelize, DataTypes) => {
  const cp_comment = sequelize.define('cp_comment', {
    content: DataTypes.STRING,
  });

  cp_comment.associate = (models) => {
    cp_comment.belongsTo(models.cp_ticket, {
      foreignKey: 'cp_ticket_id',
      as: 'ticket',
    });
    cp_comment.belongsTo(models.User, {
      foreignKey: 'writter_id',
      as: 'user',
    });
  };
  return cp_comment;
};
