class MovimentDelete{
  constructor(financeRepository){
    this.financeRepository = financeRepository;
  }

  async execute(userID,movimentId){
    const moviment = await this.financeRepository.movimentById(movimentId)

    if(!moviment) return {error:"Esse movimento não existe"}

    if(moviment.user_id !== userID) return {error:'Esse id: '+moviment.user_id+' usuario não é mesmo que: '+userID}

    await this.financeRepository.delete(movimentId)

    return null;
  }
}

module.exports = MovimentDelete;

