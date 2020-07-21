const { User } = require('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const moment = require('moment');
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
        attributes: [[Sequelize.fn('MAX', Sequelize.col('ID')), 'ID']],
        raw: true,
      });

      const lastId = (lastId) => {
        return lastId + 1;
      };

      const id = lastId(max[0].ID);
      req.body.id = id;
      req.body.passwd = req.body.password;
      req.body.passwd_hash = req.body.password;

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

  async indexAccounts(req, res) {
    try {
      const { count: accounts } = await User.findAndCountAll({});

      const lastStartDate = moment(new Date())
        .subtract(1, 'months')
        .startOf('month')
        .format('YYYY-MM-DD');

      const lastEndDate = moment(new Date())
        .subtract(1, 'months')
        .endOf('month')
        .format('YYYY-MM-DD');

      const currentStartDate = moment(new Date())
        .startOf('month')
        .format('YYYY-MM-DD');

      const currentEndDate = moment(new Date())
        .endOf('month')
        .format('YYYY-MM-DD');

      const { count: lastMonth } = await User.findAndCountAll({
        where: {
          creatime: {
            [Op.between]: [lastStartDate, lastEndDate],
          },
        },
      });

      const { count: currentMonth } = await User.findAndCountAll({
        where: {
          creatime: {
            [Op.between]: [currentStartDate, currentEndDate],
          },
        },
      });

      return res.json({ accounts, currentMonth, lastMonth });
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
      const { name, Prompt, answer, truename, email, cp_rank_id } = user;
      return res.json({
        name,
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

  async search(req, res) {
    try {
      const { search } = req.params;
      const response = await User.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.like]: `%${search}%` } },
            { email: { [Op.like]: `%${search}%` } },
            { cp_rank_id: { [Op.like]: `%${search}%` } },
          ],
        },
        attributes: ['ID', 'name', 'email', 'creatime', 'cp_rank_id'],
      });
      res.json(response);
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
          return res.status(401).json({ error: 'User already exists' });
        }
      }

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      req.body.passwd = req.body.password;
      req.body.passwd_hash = req.body.password;

      const { name, Prompt, answer, truename, cp_rank_id } = await user.update(
        req.body
      );

      return res.json({
        name,
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
