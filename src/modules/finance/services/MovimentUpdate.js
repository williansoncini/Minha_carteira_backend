class MovimentUpdate{
  constructor(financeRepository){
    this.financeRepository = financeRepository;
  }

  async execute(movimentId, data){
    const moviment = await this.financeRepository.movimentById(movimentId)

    if(!moviment) return {error:'Esse movimento não existe'}

    console.log('MovimentUpdate')
    await this.financeRepository.update(movimentId,data)

    const dataUpdate = await this.financeRepository.movimentById(movimentId)
    return dataUpdate
  }
}

module.exports = MovimentUpdate;

