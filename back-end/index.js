import {product} from './classProduct.js';
import express from 'express';
import db from './databaseConnect.js';
import JSONBig from 'json-bigint';
import cors from 'cors';

var router = express.Router();
const server = express();
server.use(express.json(), cors()); // faz com que o express entenda JSON

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
});

/*function checkProdutoExists(req, res, next) {
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
*/

//rotas vendedores
server.get('/vendedores', async (req, res) =>{
 const result = await db.pool.query("select * from vendedor");
 res.send(result);
});

server.post('/vendedores', async (req, res) => {
  let vendedor = req.body;

  const result = await db.pool.query("insert into vendedor (id_usuario, nome, cnpj, nome_fantasia, email, contato, numero, rua, cep, bairro, tipo, cpf)values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [vendedor.id_usuario, vendedor.nome, vendedor.cnpj, vendedor.nome_fantasia, vendedor.email, vendedor.contato, vendedor.numero, vendedor.rua, vendedor.cep, vendedor.bairro, vendedor.tipo, vendedor.cpf]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
});

server.put('/vendedores/:id_vendedor', async (req, res) => {
  let vendedor = req.body; 
  let headerVendedor = req.params.id_vendedor; 
  
  const result = await db.pool.query("update vendedor set nome=?, cnpj=?, nome_fantasia=?, email=?, contato=?, numero=?, rua=?, cep=?, bairro=?, tipo=?, cpf=? where id_vendedor = ?", [vendedor.nome, vendedor.cnpj, vendedor.nome_fantasia, vendedor.email, vendedor.contato, vendedor.numero, vendedor.rua, vendedor.cep, vendedor.bairro, vendedor.tipo, vendedor.cpf, headerProduto]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
});

server.delete('/vendedores/:id_vendedor', async (req, res) => {
  let headerVendedor = req.params.id_vendedor; 
  
  const result = await db.pool.query("delete from vendedor set id_vendedor=? where id_vendedor = ?", [vendedor.id_vendedor, headerVendedor]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
}); // retorna os dados após exclusão

// rotas produtos
server.get('/produtos', async (req, res) => {
  const result = await db.pool.query("select * from produto");
		res.send(result);
    } );
 
server.post('/produtos', async (req, res) => {
  let produto = req.body; //sobrepõe/edita o index obtido ma rota de acordo com o novo valor

  const result = await db.pool.query("insert into produto (id_categoria, id_vendedor, nome, valor, peso, imagem, descricao) values(?, ?, ?, ?, ?, ?, ?)", [produto.id_categoria, produto.id_vendedor, produto.nome, produto.valor, produto.peso, produto.imagem, produto.descricao]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));// converte o return em json e dps em obj para só dps fazer o envio
});

server.put('/produtos/:id_produto', async (req, res) => {
  let produto = req.body; //sobrepóe/edita o index obtido ma rota de acordo com o novo valor
  let headerProduto = req.params.id_produto; // recupera a headerProduto com os dados
  
  const result = await db.pool.query("update produto set nome=?, valor=?, peso=?, imagem=?, descricao=? where id_produto = ?", [produto.nome, produto.valor, produto.peso, produto.imagem, produto.descricao, headerProduto]);
  res.send(JSONBig.parse(JSONBig.stringify(result))); // converte o return em json e dps em obj para só dps fazer o envio
});

server.delete('/produtos/:id_produto', async (req, res) => {
  let produto = req.body;
  let headerProduto = req.params.id_produto;
  
  console.log(req.header.name);
  const result = await db.pool.query("delete from produto set id_produto=? where id_produto = ?", [produto.id_produto, headerProduto]);
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