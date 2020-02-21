module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("Inventory", {
    water: DataTypes.INTEGER,
    food: DataTypes.INTEGER,
    med_kit: DataTypes.INTEGER,
    ammo: DataTypes.INTEGER
  });

  Inventory.associate = models => {
    Inventory.belongsTo(models.Survivor, {
      as: "inventory",
      foreignKey: "id"
    });
  };

  return Inventory;
};
