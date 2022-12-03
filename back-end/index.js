import {product} from './classProduct.js';
import express from 'express';
import db from './databaseConnect.js';
import JSONBig from 'json-bigint';


var router = express.Router();
const server = express();
server.use(express.json()); // faz com que o express entenda JSON

// Query params = ?teste=1
// Route params = /produtos/1
// Request body = { "name": "xx", "price": "xx"}
// CRUD - Create, Read, Update, Delete

export const produtos = new product();

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

// GET
server.get('/produtos', async (req, res) => {
  const result = await db.pool.query("select * from produto");
		res.send(result);
    } );
    


server.get('/produtos/:index', checkProdutoInArray, (req, res) => {
  return res.json(req.produtos);
});
 
server.post('/produtos', async (req, res) => {
  let produto = req.body; 
  console.log(typeof produto.id_produto);
  //const result = await db.pool.query("insert into produto values(?)", [produto.id_produto, produto.id_categoria, produto.id_vendedor, produto.nome, produto.valor, produto.peso, produto.imagem, produto.descricao])
  const result = await db.pool.query("insert into produto (id_categoria, id_vendedor, nome, valor, peso, imagem, descricao) values(?, ?, ?, ?, ?, ?, ?)", [produto.id_categoria, produto.id_vendedor, produto.nome, produto.valor, produto.peso, produto.imagem, produto.descricao]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
 // const { Produto } = req.body; // assim esperamos buscar o name informado dentro do body da requisição  
 // produtos.push(Produto);
 // return res.json(produtos); // retorna a informação da variavel produtos
});

//app.post('/tasks', async (req, res) => {
/*  let task = req.body;
  try {
      const result = await db.pool.query("insert into tasks (description) values (?)", [task.description]);
      res.send(result);
  } catch (err) {
      throw err;
  }
});*/


server.put('/produtos/:id_produto', async (req, res) => {
  let produto = req.body;
  let headerProduto = req.params.id_produto;

  console.log(req.header.name);
  const result = await db.pool.query("update produto set nome=?, valor=?, peso=?, imagem=?, descricao=? where id_produto = ?", [produto.nome, produto.valor, produto.peso, produto.imagem, produto.descricao, headerProduto]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
 /* const { index } = req.params; // recupera o index com os dados
  const { Produto } = req.body;
  produtos[index] = Produto; // sobrepõe/edita o index obtido na rota de acordo com o novo valor
  return res.json(produtos);*/
}); // retorna novamente os produtos atualizados após o update

server.delete('/produtos/:id_produto', async (req, res) => {
  let produto = req.body;// recupera o index com os dados
  let headerProduto = req.params.id_produto;
  const result = await db.pool.query("delete from produto where id_produto = ?", [headerProduto]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
}); // retorna os dados após exclusão

// rotas login
server.get('/login', async (req, res) => {
	try {
		const result = await db.pool.query("select * from usuario");
		res.send(result);
	} catch (err) {
		throw err;
	}
  });

  server.post('/login', function(req, res) {

    let email = req.body.email;
    let password = req.body.password;
    
    if (email && password) {
      
      db.query('SELECT FROM usuario WHERE email = ? AND senha = ?', [email, password], function(error, results, fields) {
  
        if (error) throw error;
    
        if (results.length > 0) {
          
          req.session.loggedin = true;
          req.session.email = email;
          
          res.redirect('/home');
        } else {
          res.send('Incorrect email and/or Password!');
        }			
        res.end();
      });
    } else {
      res.send('Please enter email and Password!');
      res.end();
    }
  });
  
  server.get('/home', function(req, res) {
    
    if (req.session.loggedin) {
      
      res.send('Welcome back, ' + req.session.email + '!');
    } else {
      
      res.send('Please login to view this page!');
    }
    res.end();
  });

server.listen(3000);