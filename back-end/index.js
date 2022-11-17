import { Produto } from './produto';

const express = require('express');

const server = express();

server.use(express.json()); // faz com que o express entenda JSON

// Query params = ?teste=1
// Route params = /produtos/1
// Request body = { "name": "xx", "price": "xx"}

// CRUD - Create, Read, Update, Delete

const produtos = new Produto();

server.use((req, res, next) => { // server.use cria o middleware global
  console.time('Request'); // marca o início da requisição
  console.log(`Método: ${req.method}; URL: ${req.url}; `); 
  // retorna qual o método e url foi chamada

  next(); // função que chama as próximas ações 

 // console.log('Finalizou'); // será chamado após a requisição ser concluída

 // console.timeEnd('Request'); // marca o fim da requisição
});

function checkProdutoExists(req, res, next) {
  if (!req.body.Produto) {
    return res.status(400).json({ error: 'produto name is required' });
    // middleware local que irá checar se a propriedade name foi infomada, 
    // caso negativo, irá retornar um erro 400 - BAD REQUEST 
  }
  return next(); // se o nome for informado corretamente, a função next() chama as próximas ações
} 
  
function checkProdutoInArray(req, res, next) {
  const produto = produtos[req.params.index];
  if (!produto) {
    return res.status(400).json({ error: 'produtos does not exists' });
  } // checa se o produtos existe no array, caso negativo informa que o index não existe no array

  req.produto = produto;

  return next();
}

server.get('/produtos', (req, res) => {
  return res.json(produtos);
}) // rota para listar todos os produtoss

server.get('/produtos/:index', checkProdutoInArray, (req, res) => {
  return res.json(req.produtos);
})

server.post('/produtos', checkProdutoExists, (req, res) => {
  const { Produto } = req.body; // assim esperamos buscar o name informado dentro do body da requisição  
  produtos.push(Produto);
  return res.json(produtos); // retorna a informação da variavel produtos
})

server.put('/produtos/:index', checkProdutoInArray, checkProdutoExists, (req, res) => {
  const { index } = req.params; // recupera o index com os dados
  const { Produto } = req.body;
  produtos[index] = Produto; // sobrepõe/edita o index obtido na rota de acordo com o novo valor
  return res.json(produtos);
}); // retorna novamente os produtos atualizados após o update

server.delete('/produtos/:index', checkProdutoInArray, (req, res) => {
  const { index } = req.params; // recupera o index com os dados

  produtos.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array

  return res.send();
}); // retorna os dados após exclusão


server.listen(3000);