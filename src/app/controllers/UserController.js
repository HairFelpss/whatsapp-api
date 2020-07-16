const { User } = require('../models');

const sequelize = require('sequelize');

class UserController {
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
      const userExists = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userExists) {
        return res.status(400).json({
          error: 'User already exists',
        });
      }

      const max = await User.findAll({
        attributes: [[sequelize.fn('MAX', sequelize.col('ID')), 'ID']],
        raw: true,
      });

      const lastId = (lastId) => {
        return lastId + 1;
      };

      const id = lastId(max[0].ID);
      req.body.id = id;
      req.body.passwd_hash = req.body.passwd;

      const {
        ID,
        name,
        passwd,
        Prompt,
        answer,
        truename,
        email,
        cp_rank_id,
      } = await User.create(req.body);

      return res.json({
        ID,
        name,
        passwd,
        Prompt,
        answer,
        truename,
        email,
        cp_rank_id,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async index(req, res) {
    try {
      const user = await User.findAll({
        attributes: ['ID', 'name', 'email', 'creatime', 'cp_rank_id'],
      });
      return res.json(user);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async indexOne(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      const { Prompt, answer, cp_rank_id, email, name, truename } = user;
      return res.json({ Prompt, answer, cp_rank_id, email, name, truename });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async update(req, res) {
    try {
      const { email, oldPassword } = req.body;

      const { id } = req.params;
      const user = await User.findByPk(id);

      if (email && email !== user.email) {
        const userExists = await User.findOne({
          where: { email: req.body.email },
        });

        if (userExists) {
          return res.status(400).json({ error: 'User already exists' });
        }
      }

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        res.status(401).json({ error: 'Password does not match ' });
      }

      const {
        name,
        passwd,
        Prompt,
        answer,
        truename,
        cp_rank_id,
      } = await user.update(req.body);

      return res.json({
        name,
        passwd,
        Prompt,
        answer,
        truename,
        email,
        cp_rank_id,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      const deleteUser = await user.destroy(req.body);
      res.json(deleteUser);
    } catch (err) {
      console.log('err => ', err);

      res.json(err);
    }
  }
}
module.exports = new UserController();
