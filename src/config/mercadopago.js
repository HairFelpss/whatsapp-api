const mercadopago = require('mercadopago');
require('dotenv/config');

mercadopago.configure({
  sandbox: process.env.NODE_ENV === 'development' ? true : false,
  access_token:
    process.env.NODE_ENV === 'development'
      ? process.env.MERCADOPAGO_TOKEN_SANDBOX
      : process.env.MERCADOPAGO_TOKEN_PROD,
});

module.exports = mercadopago;
