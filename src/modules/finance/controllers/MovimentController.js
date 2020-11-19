const MovimentRegister = require('../services/MovimentRegister')
const FinanceRepositoy = require('../repository/FinanceRepository');
const MovimentListByUser = require('../services/MovimentListByUser');
const MovimentShowByUser = require('../services/MovimentShowByUser');
const MovimentDelete = require('../services/MovimentDelete');
const MovimentUpdate = require('../services/MovimentUpdate');
// const { json } = require('express');

class MovimentController{
    async create(request,response){
      const { title, type,date,frequency,amount,description} = request.body;

      if(!title) return response.json({error:'Titulo invalido'})
      if(!type) return response.json({error:'Tipo invalido'})
      if(!date) return response.json({error:'Data invalida'})
      if(!frequency) return response.json({error:'Frequencia invalida'})
      if(!amount) return response.json({error:'valor invalido'})
      if(!description) return response.json({error:'descricao invalida'})

      const financeRepositoy = new FinanceRepositoy();
      const movimentRegister = new MovimentRegister(financeRepositoy);

      const finance = await movimentRegister.execute({
        ...request.body,
        user_id: request.user.id.sub,
      });

      return response.json(finance)
    }

    async index(request,response){

      const financeRepository = new FinanceRepositoy();
      const movimentListByUser = new MovimentListByUser(financeRepository)

      const user_id = request.user.id.sub;
      const {type, frequency} = request.query

      // console.log(userId,type,frequency)

      const moviments = await movimentListByUser.execute(user_id,type,frequency)

      response.json(moviments)
    }

    async delete(request,response){
      const userId = request.user.id.sub;
      const idMoviment = request.params.id;

      const financeRepository = new FinanceRepositoy()
      const movimentDelete = new MovimentDelete(financeRepository)

      const message = await movimentDelete.execute(userId,idMoviment)

      if(message) return response.json(message)

      return response.status(200).send();
    }

    async show(request, response){
      const financeRepository = new FinanceRepositoy();
      const movimentShowByUser = new MovimentShowByUser(financeRepository);

      const user_id = request.user.id.sub;
      const movimentShow = request.params.id;

      const finance = await movimentShowByUser.execute(user_id,movimentShow)

      response.json(finance)
    }

    async update(request, response){
      const financeRepository = new FinanceRepositoy();
      const movimentUpdate = new MovimentUpdate(financeRepository);

      const movimentId = request.params.id;
      const data = request.body;

      const dataUpdate = await movimentUpdate.execute(movimentId,data)

      return dataUpdate
      // if(menssage) return response.json(message)

      // return response.status(200).send()
    }
}

module.exports = new MovimentController();
