const Ticket = require('../models').cp_ticket;
const { User } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class TicketController {
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
      const { id, helped_id, title, status, category } = await Ticket.create(
        req.body
      );

      return res.json({
        id,
        helped_id,
        title,
        status,
        category,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async search(req, res) {
    try {
      const { search } = req.params;
      const ticket = await Ticket.findAll({
        where: {
          title: { [Op.like]: `%${search}%` },
        },
        attributes: [
          'id',
          'title',
          'status',
          'category',
          'created_at',
          'updated_at',
        ],
        include: [
          {
            model: User,
            as: 'helped',
            attributes: ['email', 'id'],
          },
          {
            model: User,
            as: 'helper',
            attributes: ['truename', 'id'],
          },
        ],
      });
      res.json(ticket);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async filter(req, res) {
    try {
      const { category, helper, status } = req.body;
      const ticket = await Ticket.findAll({
        where: {
          [Op.or]: [
            helper && { helper_id: { [Op.like]: `%${helper}%` } },
            category && { category: { [Op.like]: `%${category}%` } },
            status && { status: { [Op.like]: `%${status}%` } },
          ],
        },
        attributes: [
          'id',
          'title',
          'status',
          'category',
          'created_at',
          'updated_at',
        ],
        include: [
          {
            model: User,
            as: 'helped',
            attributes: ['email', 'id'],
          },
          {
            model: User,
            as: 'helper',
            attributes: ['truename', 'id'],
          },
        ],
      });
      res.json(ticket);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async index(req, res) {
    try {
      const ticket = await Ticket.findAll({
        attributes: [
          'id',
          'title',
          'status',
          'category',
          'created_at',
          'updated_at',
        ],
        include: [
          {
            model: User,
            as: 'helped',
            attributes: ['email', 'id'],
          },
          {
            model: User,
            as: 'helper',
            attributes: ['truename', 'id'],
          },
        ],
      });
      return res.json(ticket);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async indexSolvedTickets(req, res) {
    try {
      const { count: solved } = await Ticket.findAndCountAll({
        where: {
          status: 2,
        },
        attributes: [
          'id',
          'title',
          'status',
          'category',
          'created_at',
          'updated_at',
        ],
      });
      const { count: tickets } = await Ticket.findAndCountAll({
        attributes: [
          'id',
          'title',
          'status',
          'category',
          'created_at',
          'updated_at',
        ],
      });
      return res.json({ solved, tickets });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findByPk(id);

      const {
        helped_id,
        helper_id,
        title,
        status,
        category,
      } = await ticket.update(req.body);

      return res.json({
        helped_id,
        helper_id,
        title,
        status,
        category,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findByPk(id);
      const deleteTicket = await ticket.destroy();
      res.json(deleteTicket);
    } catch (err) {
      console.log('err => ', err);

      res.json(err);
    }
  }
}

module.exports = new TicketController();
