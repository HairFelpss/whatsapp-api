module.exports = (sequelize, DataTypes) => {
  const cp_ticket = sequelize.define('cp_ticket', {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    status: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
  });

  cp_ticket.associate = (models) => {
    cp_ticket.hasOne(models.User, {
      foreignKey: 'helper_id',
      as: 'helper',
    });

    cp_ticket.hasOne(models.User, {
      foreignKey: 'helped_id',
      as: 'helped',
    });
  };

  return cp_ticket;
};
