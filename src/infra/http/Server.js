// É necessario colocar isso aqui para que fique disponivel para toda aplicação
require('dotenv/config')

const express = require('express');
//1 estou importando tudo oque está dentro da pasta node modules/express dentro desta variavel
const server = express();
//2 aqui estamos inicializando o servidor
// 6 - Criar uma rota
// 7 - Rodar o server para testar
// server.get('/', function(request, response){
//     response.send('</h1> O pai ta on! <h1>')
// })
// 8 - instalar maias um modulo para o projeot o modulo que fica recarregando o projeto a cada alteração
// nodemon
// instalar ele - npm install -g nodemon
// no meu caso não vou rodar o nodemon pois meu sisstema está com restrição e não quero tirar
//esta pegando os arquivos da outra pasta
//está dizendo para o server utilizar esses arquivos
const routes = require('./routes');
//habilita chamadas com Json
server.use(express.json())
server.use(routes);

//5 O servidor ligar deve ser a ultima coisa que ele deve fazer
//Antes ele deve carregar todas as coisas
server.listen(3333, () => {
    console.log('Server is running on 3333 port!');
}); //3 vai ficar escutando as requisições

//4 node index.js - O pai ta on
