//recebe tudo oque este em express na pasta do node modules
// const { response } = require("express");
const SingUpService = require("../service/SignUpService");
const UserRepository = require('../repositories/UsersRepository');
const BcryptProvider = require('../providers/HashProvider/Implementation/Bcrypt')
const TokenProvider = require('../providers/TokenProvider/Implementations/JwtToken')

//classe do user controller
class UserController{
    //método de criação
    //async para esperar a resposta
    async create (request,response){
        const {name, email, password,passwordConfirm} = request.body;

        if (!name) return response.json({message : "Name is required!"});

        if(!email) return response.json({message : "E-mail is required!"});

        if(!password) return response.json({message : "Password is required!"});

        if(!passwordConfirm) return response.json({message : "Password confirm is required!"});

        if(password != passwordConfirm) return response.json({message: "Passwords not match!"});

        const userRepository = new UserRepository();
        const bcryptProvider = new BcryptProvider();
        const singUpService = new SingUpService(userRepository,bcryptProvider);

        const user = await singUpService.execute({name, email, password});
        return response.json(user);

        // return response.send('Agora vai que é tua service!')

        // return response.send('O Controller do usuário foi chamado!');
    }

    // async teste(request,response){
    //     return response.send('Agora estou sendo chamado cara')
    // }
};

//exportando a classe instanciada
module.exports = new UserController();
