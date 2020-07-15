const Rank = require('../models').cp_rank;
const { User } = require('../models');

class RankController {
  async store(req, res) {
    try {
      const rank = await Rank.create(req.body);
      return res.json(rank);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async index(req, res) {
    try {
      const ranks = await Rank.findAll({
        attributes: ['id', 'name'],
        include: [
          {
            model: User,
            as: 'users',
            attributes: ['cp_rank_id', 'name', 'email'],
          },
        ],
      });

      return res.json(ranks);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (req.body.name !== rank.name) {
        const rankExistis = await Rank.findOne({
          where: { name: req.body.name },
        });

        if (rankExistis) {
          return res.status(400).json({ error: 'Rank already exists' });
        }
      }

      const rank = await Rank.findByPk(id);
      const updateType = await rank.update(req.body);

      res.json(updateType);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const rank = await Rank.findByPk(id);

      const deleteType = await rank.destroy(req.body);

      res.json(deleteType);
    } catch (err) {
      console.log('err => ', err);
    }
  }
}

module.exports = new RankController();
