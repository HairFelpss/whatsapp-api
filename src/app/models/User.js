const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        field: 'ID',
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      passwd: DataTypes.INTEGER,
      passwd_hash: DataTypes.VIRTUAL,
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
      hooks: {
        beforeSave: async (user) => {
          if (user.passwd_hash) {
            user.passwd = await bcrypt.hash(user.passwd_hash, 10);
          }
        },
      },
    }
  );

  // Adding an instance level methods.
  User.prototype.checkPassword = async function (passwd_hash) {
    return await bcrypt.compareSync(passwd_hash, this.passwd);
  };

  User.associate = (models) => {
    User.belongsTo(models.cp_rank, {
      foreignKey: 'cp_rank_id',
      as: 'rank',
    });

    User.hasOne(models.cp_tickets_messages, {
      foreignKey: 'writer_id',
      as: 'writer',
    });
  };
  return User;
};
