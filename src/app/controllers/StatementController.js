const statement = require('../schemas/CP_statement');

class StatementController {
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
      const { user_id, description, status, value } = await statement.create(
        req.body
      );

      res.json({
        user_id,
        description,
        status,
        value,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async index(req, res) {
    try {
      const response = await statement.find({}, { _id: 0, __v: 0 });
      res.json(response);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async indexOneUser(req, res) {
    try {
      const userId = req.params.id;
      const response = await statement.find(
        { user_id: userId },
        { _id: 0, __v: 0 }
      );
      res.json(response);
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const {
        user_id,
        description,
        status,
        value,
      } = await statement.findOneAndUpdate({ id: id }, req.body);

      return res.json({
        user_id,
        description,
        status,
        value,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const {
        user_id,
        description,
        status,
        value,
      } = await statement.findOneAndDelete({ id: id });

      res.json({
        user_id,
        description,
        status,
        value,
      });
    } catch (err) {
      console.log('err => ', err);
      res.json(err);
    }
  }
}
module.exports = new StatementController();
