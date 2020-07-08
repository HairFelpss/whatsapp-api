/**
 * Arquivos de Configuração
 */
const Pagseguro = require('pagseguro-nodejs');
require('dotenv/config');
//configurações de acesso
const pag = new Pagseguro({
  email: process.env.EMAIL,
  token:
    process.env.NODE_ENV === 'development'
      ? process.env.PAGSEGURO_TOKEN_SANDBOX
      : process.env.PAGSEGURO_TOKEN_PROD,
  mode:
    process.env.NODE_ENV === 'development'
      ? Pagseguro.MODE_SANDBOX
      : Pagseguro.MODE_PAYMENT,
});

pag.currency('BRL');
pag.reference('AMORMUITOAMORMUITOAMOR');
pag.redirect('http://localhost:3000/success');
module.exports = pag;
