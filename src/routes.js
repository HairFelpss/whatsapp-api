const routes = require("express").Router();
const SurvivorController = require("./app/controllers/SurvivorController");

routes.post("/survivors", SurvivorController.store);

module.exports = routes;
