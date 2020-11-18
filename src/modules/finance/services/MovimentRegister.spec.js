const MovimentRegister = require('./MovimentRegister')
const RepositoryFake = require('../repository/FinanceRepositoryFake')

describe('MovimentRegister', () => {
  test('Deve ser possivel cadastrar um novo movimento financeiro',async () => {
    const data = {
      title: "Café",
      type:"Saida",
      date:"16/11/2020",
      frequency:"Recorrente",
      amount:8.6,
      description:"Comprar café urgente",
    };
    const repositoryFake = new RepositoryFake()
    const movimentRegister = new MovimentRegister(repositoryFake);
    const finance = await movimentRegister.execute(data);

    expect(finance).toHaveProperty('id')
  });
});


