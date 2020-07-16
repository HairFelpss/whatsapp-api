const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const { User } = require('../models');
const Rank = require('../models').cp_rank;

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

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(401).json({
          error: 'User not found',
        });
      }

      if (!(await user.checkPassword(passwd))) {
        return res.status(401).json({
          error: 'Password does not match ',
        });
      }

      const { id, name, Prompt, answer, truename, cp_rank_id } = user;
      const rank = cp_rank_id
        ? await Rank.findOne({ where: { id: cp_rank_id } })
        : null;
      const rank_name = rank ? rank.name : 'user';

      return res.json({
        user: {
          name,
          Prompt,
          answer,
          truename,
          email,
          rank_name,
          cp_rank_id,
        },
        token: jwt.sign(
          {
            id,
          },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
          }
        ),
      });
    } catch (err) {
      console.log('err => ', err);
    }
  }
}

module.exports = new SessionController();
