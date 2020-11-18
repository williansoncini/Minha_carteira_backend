//recebe tudo oque este em express na pasta do node modules
const SingInService = require("../service/SignInService");
const UserRepository = require('../repositories/UsersRepository');
const BcryptProvider = require('../providers/HashProvider/Implementation/Bcrypt');
const TokenProvider = require('../providers/TokenProvider/Implementations/JwtToken')

//classe do user controller
class AuthController{
    //método de criação
    //async para esperar a resposta
    async create (request,response){
        const {email, password} = request.body;


        if(!email) return response.json({message : "E-mail is required!"});

        if(!password) return response.json({message : "Password is required!"});

        const userRepository = new UserRepository();
        const bcryptProvider = new BcryptProvider();
        const tokenProvider = new TokenProvider();
        const singInService = new SingInService(userRepository,bcryptProvider,tokenProvider);

        const user = await singInService.execute({email, password});

        return response.json(user);
        // return response.send('Agora vai que é tua service!')
        // return response.send('O Controller do usuário foi chamado!');
    }
    // async teste(request,response){
    //     return response.send('Agora estou sendo chamado cara')
    // }
}
//exportando a classe instanciada
module.exports = new AuthController();
