class JwtTokenModel {
  async generate(userId) {
    // return `Baren token-${userId}`;
    return 'Baren token'
  }
}

module.exports = JwtTokenModel;
