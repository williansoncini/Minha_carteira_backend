const { hash } = require("bcrypt")

module.exports =
{
  async hash(password,salt){
    console.log('Você está utilizando um mock - Exemplo')
    return 'any_rash'
  },
};
