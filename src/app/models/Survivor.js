module.exports = (sequelize, DataTypes) => {
  const Survivor = sequelize.define("Survivor", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    coordinates: DataTypes.STRING,
    infected: DataTypes.BOOLEAN,
    inventory_id: DataTypes.INTEGER
  });

  Survivor.associate = models => {
    Survivor.hasOne(models.Inventory, {
      foreignKey: "id",
      as: "inventory"
    });
  };
  return Survivor;
};
