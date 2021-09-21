const routes = require('express').Router();

// Controllers
const UserController = require('./controllers/UserController');

routes.get('/test', UserController.test);

module.exports = routes;