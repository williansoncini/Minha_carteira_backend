const UsersRepositoryFake = require('../repositories/UsersRepositoryFake')
const HashProvider = require('../providers/HashProvider/Model/HashProviderModel')
const JwtTokenModel = require('../providers/TokenProvider/Model/JwtTokenModel')
const SignInService = require('./SignInService');

describe('SignInService', () => {''
  test('Valida se o email e senha conferem com o banco de dados', async () => {
    const data = {
      email: 'exist@email.com',
      password: 'any_password',
    };

    const userRepositoryFake = new UsersRepositoryFake()
    const hashProvider = new HashProvider()
    const jwtTokenModel = new JwtTokenModel()
    const signInService = new SignInService(userRepositoryFake,hashProvider,jwtTokenModel);

    const {user} = await signInService.execute(data);

    expect(user).toHaveProperty('id');
  });

  test('Precisa dar erro caso o email não exista',async ()=> {
    const data = {
      email: 'not_exist@email.com',
      password: 'any_password',
    };

    const userRepositoryFake = new UsersRepositoryFake()
    const hashProvider = new HashProvider()
    const jwtTokenModel = new JwtTokenModel()
    const signInService = new SignInService(userRepositoryFake,hashProvider,jwtTokenModel);
    // const signInService = new SignInService(userRepositoryFake,hashProvider)

    const user = await signInService.execute(data);

    console.log(user)
    expect(user).toHaveProperty('error');

  })

  test('Precisa dar erro caso a senha não exista',async ()=> {
    const data = {
      email: 'exist@email.com',
      password: 'invalid_password',
    };

    const userRepositoryFake = new UsersRepositoryFake()
    const hashProvider = new HashProvider()
    const jwtTokenModel = new JwtTokenModel()
    const signInService = new SignInService(userRepositoryFake,hashProvider,jwtTokenModel);

    const user = await signInService.execute(data);

    expect(user).toHaveProperty('error');

  })
});
