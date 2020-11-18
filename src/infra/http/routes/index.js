//recebe todo mundo que está dentro da pasta express dentro da pasta node modules
const { Router } = require('express');
const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const financeRoutes = require('./finance.routes')

// const userRoutes = require('./users.routes');

//inicializa o Router
const routes = Router();

//faz uma requisição na URL users, puxando da usersRoutes
routes.use('/users',usersRoutes);
routes.use('/auth',authRoutes);
routes.use('/finance',financeRoutes);

module.exports = routes;
