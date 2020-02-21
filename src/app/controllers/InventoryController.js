const { Inventory } = require("../models");

class InventoryController {
  async update(req, res) {
    try {
      const { id } = req.params;
      const inventory = await Inventory.findByPk(id);

      const updateInventory = await inventory.update(req.body);

      return res.json(updateInventory);
    } catch (err) {
      console.log("err => ", err);
    }
  }
}
module.exports = new InventoryController();
