import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Role from '../app/models/Role';
import databaseConfig from '../config/database';

const models = [User, File, Role];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
