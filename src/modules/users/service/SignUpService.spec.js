const UsersRepositoryFake = require('../repositories/UsersRepositoryFake')
const HashProvider = require('../providers/HashProvider/Model/HashProviderModel')
const SignUpService = require('./SignUpService');

describe('SignUpService', () => {
  test('Testa a criação de um novo usuario', async () => {
    const data = {
      name: 'any_user',
      email: 'any@email.com',
      password: 'any_password',
    };

    const userRepositoryFake = new UsersRepositoryFake()
    const hashProvider = new HashProvider()
    const signUpService = new SignUpService(userRepositoryFake,hashProvider);

    const user = await signUpService.execute(data);

    expect(user).toHaveProperty('id');
  });

  test('Trara um erro caso o email já exista ao cadastrar', async () => {
    const data = {
      name: 'any_user',
      email: 'exist@email.com',
      password: 'any_password',
    };

    const userRepositoryFake = new UsersRepositoryFake()
    const hashProvider = new HashProvider()
    const signUpService = new SignUpService(userRepositoryFake,hashProvider);

    const user = await signUpService.execute(data);

    expect(user).toHaveProperty('error');
  });
});
