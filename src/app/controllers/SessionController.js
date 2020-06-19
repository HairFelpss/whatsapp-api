const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth');

const { User } = require('../models');

class SessionController {
  async store(req, res) {
    try {
      /*const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' });
      }*/

      const { email, passwd } = req.body;
      console.log({ email, passwd });

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      if (!(await user.checkPassword(passwd))) {
        return res.status(401).json({ error: 'Password does not match ' });
      }

      console.log('aquiiii o =>', user);
      const { id, name, Prompt, answer, truename } = user;

      return res.json({
        user: {
          name,
          passwd,
          Prompt,
          answer,
          truename,
          email,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }
}

module.exports = new SessionController();
