const { Treasure } = require('../models');
const treasure = require('../schemas/CP_treasure');

class TreasureController {
  async store(req, res) {
    try {
      /*const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(8),
        role_id: Yup.number()
      })*/

      /*if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' })
      }*/
      await treasure.create(req.body);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async index(req, res) {
    try {
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async indexOne(req, res) {
    try {
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async update(req, res) {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const treasure = await Treasure.findByPk(id);

      if (name && name !== treasure.name) {
        const treasureExists = await Treasure.findOne({
          where: { name: req.body.name },
        });

        if (treasureExists) {
          return res.status(401).json({ error: 'Treasure already exists' });
        }
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const treasure = await Treasure.findByPk(id);
      const deleteTreasure = await treasure.destroy(req.body);
      res.json(deleteUser);
    } catch (err) {
      console.log('err => ', err);

      res.json(err);
    }
  }
}
module.exports = new TreasureController();
