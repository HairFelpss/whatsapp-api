'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const basename = path.basename(__filename);
const config = require('../../config/database');
const {
  username,
  password,
  host,
  port,
  database,
} = require('../../config/mongoose');
const db = {};

try {
  mongoose.connect(
    `mongodb://${username}:${password}@${host}:${port}/${database}`,
    {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }
  );
  mongoose.set('useCreateIndex', true);
  mongoose.connection.on('error', () => console.log('connection error'));
  mongoose.connection.once('open', () => console.log('Mongo DB connected'));
} catch (err) {
  console.log('err => ', err);
}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
