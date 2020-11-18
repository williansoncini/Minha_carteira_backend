class HashProviderModel{
  async hash(password,salt){
    return 'any_password'
  }

  async compare(password,passwordHashed){
    return password == passwordHashed
  }
}
module.exports = HashProviderModel;
