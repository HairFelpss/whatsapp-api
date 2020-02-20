const { Survivor } = require("../models");

class SurvivorController {
  async store(req, res) {
    try {
      console.log(req.body);
      const { name, age, gender, coordinates } = await Survivor.create(
        req.body
      );

      return res
        .json({
          name,
          age,
          gender,
          coordinates
        })
        .send();
    } catch (err) {
      console.log("err => ", err);
    }
  }
}
module.exports = new SurvivorController();
