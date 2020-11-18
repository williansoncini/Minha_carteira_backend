// const { findByEmail } = require('../repositories/UsersRepository');
// const UsersRepository = require('../repositories/UsersRepository')
class signUpService {
  //Criando um construtor para fazer a inverção de controle
  constructor(userRepository,cryptProvider){
    this.userRepository = userRepository;
    this.cryptProvider = cryptProvider;
  }
    async execute(data){
        const {name, email, password } = data;

        const emailAlreadyUser = await this.userRepository.findByEmail(email);

        if (emailAlreadyUser)
            return {error: 'Email is not avaiable. Choice Other!'};

        // 10 = salt
        const passwordHashed = await this.cryptProvider.hash(password,10);

        const user = await this.userRepository.add({
          name,
          email,
          password: passwordHashed,
        });
        // Já existe um email cadastrado?
        //Await para ele esperar executar

        return user;
    }
}

module.exports = signUpService;
