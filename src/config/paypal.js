const paypal = require('paypal-rest-sdk');

require('dotenv/config');

paypal.configure(
  process.env.NODE_ENV === 'development'
    ? {
        mode: 'sandbox',
        client_id: process.env.CLIENT_ID_SANDBOX,
        client_secret: process.env.CLIENT_SECRET_SANDBOX,
      }
    : {
        mode: 'production',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }
);

module.exports = paypal;
