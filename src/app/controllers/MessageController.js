const Message = require('../models').cp_tickets_messages;

class MessageController {
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
      const {
        id,
        writer_id,
        ticket_id,
        content,
        category,
        created_at,
      } = await Message.create(req.body);

      return res.json({
        id,
        writer_id,
        ticket_id,
        content,
        category,
        created_at,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async index(req, res) {
    try {
      const { id } = req.params;
      const message = await Message.findAll({
        where: {
          cp_ticket_id: id,
        },
        attributes: [
          'id',
          'writer_id',
          'cp_ticket_id',
          'content',
          'created_at',
        ],
      });
      return res.json(message);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteMessage = await Message.destroy({
        where: {
          cp_ticket_id: id,
        },
      });
      res.json(deleteMessage);
    } catch (err) {
      console.log('err => ', err);
      res.json(err);
    }
  }

  async deleteMessage(req, res) {
    try {
      const { id } = req.params;
      const message = await Message.findByPk(id);
      const deleteMessage = await message.destroy();
      res.json(deleteMessage);
    } catch (err) {
      console.log('err => ', err);

      res.json(err);
    }
  }
}
module.exports = new MessageController();
