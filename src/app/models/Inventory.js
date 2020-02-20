module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("Survivor", {
    water: DataTypes.INTEGER,
    food: DataTypes.INTEGER,
    medKit: DataTypes.INTEGER,
    ammo: DataTypes.INTEGER
  });

  Inventory.associate = models => {
    Inventory.belongsTo(models.Survivor, {
      as: "inventory",
      foreignKey: "inventory_id"
    });
  };

  return Inventory;
};
