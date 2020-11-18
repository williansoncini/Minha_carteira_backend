//recebe tudo oque está dentro da pasta express na pasta node modules
const { Router } = require('express');
//recebe o arquivo de userContrller que instanciamos
const AuthController = require('../../../modules/users/controllers/AuthController');
//recebe a variavel que foi declarada acima inicializada
const usersRoutes = Router();

//está rota está fazendo um get na user controller que foi instanciada acima também
//está chamando o método create da classe Usercontroller
// usersRoutes.post('/create', UserController.create);
usersRoutes.post('/',AuthController.create);
// usersRoutes.get('/teste', UserController.teste)
//está exportando o usersRoutes
module.exports = usersRoutes;
