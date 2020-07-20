module.exports = (sequelize, DataTypes) => {
  const cp_rank = sequelize.define('cp_rank', {
    name: DataTypes.STRING,
  });

  cp_rank.associate = (models) => {
    cp_rank.hasMany(models.User, {
      foreignKey: 'cp_rank_id',
      as: 'users',
    });
  };
  return cp_rank;
};
