const routes = require('express').Router();

// Controllers
const UserController = require('./controllers/UserController');

routes.get('/user/getAll', UserController.getAll);
routes.get('/user/get/:id', UserController.get);
routes.post('/user/create', UserController.add);

module.exports = routes;