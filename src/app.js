require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

require('express-async-errors');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.json());
  }

  routes() {
    this.express.use(routes);
  }

  exceptionHandler() {
    this.express.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

module.exports = new AppController().express;
