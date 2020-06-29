const app = require('./app');

console.log(
  `listen app on port: ===> ${process.env.PORT || 5000}, enviroment => ${
    process.env.NODE_ENV
  }`
);
app.listen(process.env.PORT || 5000);
