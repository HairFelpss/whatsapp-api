const routes = require("express").Router();
const SurvivorController = require("./app/controllers/SurvivorController");
const InventoryController = require("./app/controllers/InventoryController");

routes.post("/survivors", SurvivorController.store);
routes.put("/survivors/:id", SurvivorController.update);
routes.get("/survivors", SurvivorController.index);

routes.put("/inventory/:id", InventoryController.update);

module.exports = routes;
