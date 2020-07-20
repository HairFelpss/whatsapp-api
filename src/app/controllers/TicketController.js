const Ticket = require('../models').cp_ticket;

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

  async index(req, res) {
    try {
      const ticket = await Ticket.findAll({
        attributes: [
          'id',
          'helped_id',
          'helper_id',
          'title',
          'status',
          'category',
          'created_at',
          'updated_at',
        ],
      });
      return res.json(ticket);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async indexByHelper(req, res) {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findAll({
        where: {
          helper_id: id,
        },
        attributes: [
          'id',
          'helped_id',
          'helper_id',
          'title',
          'status',
          'category',
          'created_at',
          'updated_at',
        ],
      });
      return res.json(ticket);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async indexByHelped(req, res) {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findAll({
        where: {
          helped_id: id,
        },
        attributes: [
          'id',
          'helped_id',
          'helper_id',
          'title',
          'status',
          'category',
          'created_at',
          'updated_at',
        ],
      });
      return res.json(ticket);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async indexOne(req, res) {
    try {
      const { id } = req.params;
      const {
        helped_id,
        helper_id,
        title,
        status,
        category,
      } = await Ticket.findByPk(id);

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
      const deleteTicket = await ticket.destroy(req.body);
      res.json(deleteTicket);
    } catch (err) {
      console.log('err => ', err);

      res.json(err);
    }
  }
}
module.exports = new TicketController();
