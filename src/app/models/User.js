const brycpt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      passwd: DataTypes.INTEGER,
      Prompt: DataTypes.STRING,
      answer: DataTypes.STRING,
      truename: DataTypes.STRING,
      email: DataTypes.STRING,
      createdAt: {
        field: 'creatime',
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
  return User;
};
