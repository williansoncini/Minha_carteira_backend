class MovimentShowByUser{
  constructor(financeRepository){
    this.financeRepository = financeRepository;
  }

  async execute(user_id,moviment_id){
    const moviment = await this.financeRepository.movimentById(moviment_id);

    console.log('Usuario' + user_id)

    if(moviment.user_id !== user_id) return {message:"Você não tem permissão para ver esse movimento"};

    return moviment
  }
}

module.exports = MovimentShowByUser;

