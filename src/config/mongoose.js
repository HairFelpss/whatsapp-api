require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  host: process.env.MONGO_CP_DB_HOST,
  port: process.env.MONGO_CP_DB_PORT,
  username: process.env.MONGO_CP_DB_USER,
  password: encodeURIComponent(process.env.MONGO_CP_DB_PASSWORD),
  database: process.env.MONGO_CP_DB_NAME,
};
