const app = require('./app');

console.log('listen app on port: ===> ', process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);
