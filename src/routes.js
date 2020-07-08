const routes = require('express').Router();
const UserController = require('./app/controllers/UserController');
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

//PAYMENTS
routes.post('/pagseguro/pay', PagSeguroController.payment);
routes.get('/pagseguro/success', PagSeguroController.success);
//routes.get('/pagseguro/cancel', PagSeguroController.cancel);

routes.post('/mercadopago/pay', MercadoPagoController.payment);
//routes.get('/mercadopago/success', MercadoPagoController.success);
//routes.get('/mercadopago/cancel', MercadoPagoController.cancel);

routes.post('/paypal/pay', PayPalController.payment);
routes.get('/paypal/success', PayPalController.success);
routes.get('/paypal/cancel', PayPalController.cancel);

module.exports = routes;
