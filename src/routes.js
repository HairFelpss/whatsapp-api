const routes = require('express').Router();
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/auth');
const PagSeguroController = require('./app/controllers/PagSeguroController');

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

//PAYMENTS
routes.post('/pagseguro/pay', PagSeguroController.payment);

module.exports = routes;
