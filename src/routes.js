const routes = require('express').Router();
const UserController = require('./app/controllers/UserController');
const RankController = require('./app/controllers/RankController');
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/auth');
const PagSeguroController = require('./app/controllers/PagSeguroController');
const MercadoPagoController = require('./app/controllers/MercadoPagoController');
const PayPalController = require('./app/controllers/PayPalController');

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/rank', RankController.store);
routes.get('/rank', RankController.index);
routes.put('/rank/:id', RankController.update);
routes.delete('/rank/:id', RankController.delete);

//PAYMENTS
routes.post('/pagseguro/pay', PagSeguroController.payment);
routes.get('/pagseguro/success', PagSeguroController.success);
//routes.get('/pagseguro/cancel', PagSeguroController.cancel);
routes.post('/pagseguro/notify', PagSeguroController.notify);

routes.post('/mercadopago/pay', MercadoPagoController.payment);
//routes.get('/mercadopago/success', MercadoPagoController.success);
//routes.get('/mercadopago/cancel', MercadoPagoController.cancel);
routes.post('/mercadopago/notify', MercadoPagoController.notify);

routes.post('/paypal/pay', PayPalController.payment);
routes.get('/paypal/success', PayPalController.success);
routes.get('/paypal/cancel', PayPalController.cancel);

module.exports = routes;
