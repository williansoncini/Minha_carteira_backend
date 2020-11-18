// const { findByEmail } = require('../repositories/UsersRepository');
// const UsersRepository = require('../repositories/UsersRepository')
// const {sign} = require('jsonwebtoken')

class SingIgService {
  //Criando um construtor para fazer a inverção de controle
    constructor(userRepository,cryptProvider, tokenProvider){
    this.userRepository = userRepository;
    this.cryptProvider = cryptProvider;
    this.tokenProvider = tokenProvider;
  }
    async execute(data){
        const {email, password } = data;

        const user = await this.userRepository.findByEmail(email);

        if(!user) return {error: 'usuario nao encontrado'};

        const passwordMatch = await this.cryptProvider.compare(password,user.password)

        if (!passwordMatch) return {error: 'Senhas não batem'}

        delete user.password;

        const token = await this.tokenProvider.generate(user.id);

        return {
          user,
          token,
        };
    }
}

module.exports = SingIgService;
