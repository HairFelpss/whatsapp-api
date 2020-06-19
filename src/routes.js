const routes = require('express').Router();
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/auth');

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/users', UserController.index);

routes.use(authMiddleware);

routes.put('/users/:id', UserController.update);

module.exports = routes;
