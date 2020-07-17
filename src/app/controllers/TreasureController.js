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
      const {
        title,
        description,
        image_url,
        qt_bought,
        amount,
        price,
      } = await treasure.create(req.body);

      res.json({
        title,
        description,
        image_url,
        qt_bought,
        amount,
        price,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async index(req, res) {
    try {
      const response = await treasure.find(
        {},
        { _id: 0, __v: 0, created_at: 0 }
      );

      res.json(response);
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
      const { title } = req.body;
      const { id } = req.params;
      const response = await treasure.findOne({ id: id });
      console.log('costa de sapo => ', response);

      if (title && title !== response.title) {
        console.log('entro => ', req.body.title);

        const treasureExists = await treasure.findOne({
          title: req.body.title,
        });
        console.log('asdfasd =>> ', treasureExists);

        if (treasureExists) {
          console.log('asdfasd');
          return res.status(401).json({ error: 'treasure already exists' });
        }
      }

      const {
        description,
        image_url,
        qt_bought,
        amount,
        price,
      } = await treasure.findOneAndUpdate({ id: id }, req.body);

      return res.json({
        title,
        description,
        image_url,
        qt_bought,
        amount,
        price,
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        description,
        image_url,
        qt_bought,
        amount,
        price,
      } = await treasure.findOneAndDelete({ id: id });

      res.json({
        title,
        description,
        image_url,
        qt_bought,
        amount,
        price,
      });
    } catch (err) {
      console.log('err => ', err);

      res.json(err);
    }
  }
}
module.exports = new TreasureController();
