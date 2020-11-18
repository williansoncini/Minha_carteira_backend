const {verify} = require('jsonwebtoken')

function authenticated(request,response,next){
  const authHeader = request.headers.authorization;
  // console.log('O middleware foi chamado')

  if(!authHeader) return response.json({error:'JWT token is missing!'})

  try{
    console.log('To passando pelo Middleware')
    const [,token] = authHeader.split(' ')
    const decoded = verify(token,process.env.KEY_SECRET_TOKEN)

    request.user = {
      id: decoded,
    };
  }
  catch{
      return response.json({error:'JWT token is missing!'})
    }

    return next()
}

module.exports = authenticated;
