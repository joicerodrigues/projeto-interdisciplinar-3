import { product } from "./classProduct.js";
import express, { query } from "express";
import db from "./databaseConnect.js";
import JSONBig from "json-bigint";
import session from "express-session";
import path from "path";
import cors from "cors";

var router = express.Router();
const server = express();
server.use(express.json(), cors()); // faz com que o express entenda JSON

server.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Query params = ?teste=1
// Route params = /produtos/1
// Request body = { "name": "xx", "price": "xx"}
// CRUD - Create, Read, Update, Delete

export const produtos = new product();

server.use((req, res, next) => {
  // server.use cria o middleware global
  console.time("Request"); // marca o início da requisição
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
// rota categoria

server.get("/categoria", async (req, res) => {
  const result = await db.pool.query("select * from categoria");
  res.send(JSONBig.parse(JSONBig.stringify(result)));
});

server.get("/produtos_cat", async (req, res) => {
  let categoria = req.body;
  const result = await db.pool.query("select * from produto where id_categoria = ?", categoria.id_categoria);
  res.send(result);
});

// rotas produtos
server.get("/produtos", async (req, res) => {
  const result = await db.pool.query("select * from produto");
  res.send(result);
});

server.get("/produtos/:id_produto", async (req, res) => {
  let produto = req.params.id_produto;
  const result = await db.pool.query("select * from produto where id_produto = ?", produto);
  res.send(result);
});

//listando produtos baseado no usuario conectado
server.post("/produto_listar", async (req, res) => {
  //let email = req.session.email;
  let email = req.body.email;
  const result = await db.pool.query("select * from produto where id_vendedor = (select id_vendedor from vendedor where email = ?)", email);
  res.send(result);
});

server.post("/produtos", async (req, res) => {
  //let email = req.session.email;
  let email = req.body.email;
  let produto = req.body; //sobrepõe/edita o index obtido ma rota de acordo com o novo valor
  const response = await db.pool.query("select id_vendedor from vendedor where email = ?", email);
  if (!!response && !!response[0].id_vendedor) {
    const result = await db.pool.query("insert into produto (id_categoria, id_vendedor, nome, valor, peso, imagem, descricao) values(?, ?, ?, ?, ?, ?, ?)", [produto.id_categoria, response[0].id_vendedor, produto.nome, produto.valor, produto.peso, produto.imagem, produto.descricao]);
    res.send(JSONBig.parse(JSONBig.stringify(result)));
  }
});

server.put("/produtos/:id_produto", async (req, res) => {
  let produto = req.body; //sobrepóe/edita o index obtido ma rota de acordo com o novo valor
  let headerProduto = req.params.id_produto; // recupera a headerProduto com os dados

  const result = await db.pool.query("update produto set nome=?, valor=?, peso=?, imagem=?, descricao=? where id_produto = ?", [produto.nome, produto.valor, produto.peso, produto.imagem, produto.descricao, headerProduto]);
  res.send(JSONBig.parse(JSONBig.stringify(result))); // converte o return em json e dps em obj para só dps fazer o envio
});

server.delete("/produtos/:id_produto", async (req, res) => {
  let produto = req.body;
  let headerProduto = req.params.id_produto;

  console.log(req.header.name);
  const result = await db.pool.query("delete from produto set id_produto=? where id_produto = ?", [produto.id_produto, headerProduto]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
}); // retorna os dados após exclusão

//rotas vendedores
server.get("/vendedores/:id_user", async (req, res) => {
  let vendedor = req.body;
  let headerVendedor = req.params.id_vendedor;
  const result = await db.pool.query("select * from vendedor where id_user = ?", [headerVendedor]);
  res.send(result);
});

server.post("/vendedores", async (req, res) => {
  let vendedor = req.body; //let = "variável local no escopo do bloco atual".
  let email = req.body.email;
  let query = "SELECT email FROM vendedor WHERE email = ?";

  const hasEmail = await db.pool.query(query, [email]);
  console.log(req.hasEmail);
  if (email != "") {
    if (hasEmail.length === 0) {
      const result = await db.pool.query("insert into vendedor (nome,cnpj, nome_fantasia, contato, numero, rua, cep, bairro, cpf, email, cidade, uf, senha)values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        vendedor.nome,
        vendedor.cnpj,
        vendedor.nome_fantasia,
        vendedor.contato,
        vendedor.numero,
        vendedor.rua,
        vendedor.cep,
        vendedor.bairro,
        vendedor.cpf,
        vendedor.email,
        vendedor.cidade,
        vendedor.uf,
        vendedor.senha,
      ]);
      res.send(JSONBig.parse(JSONBig.stringify(result)));
    } else {
      res.send("Email já cadastrado!");
    }
  }
});

server.put("/vendedores/:id_vendedor", async (req, res) => {
  let vendedor = req.body;
  let headerVendedor = req.params.id_vendedor;

  const result = await db.pool.query("update vendedor set nome=?, cnpj=?, nome_fantasia=?, email=?, contato=?, numero=?, rua=?, cep=?, bairro=?, cpf=?, cidade=?, uf=?, where id_vendedor = ?", [
    vendedor.nome,
    vendedor.cnpj,
    vendedor.nome_fantasia,
    vendedor.email,
    vendedor.contato,
    vendedor.numero,
    vendedor.rua,
    vendedor.cep,
    vendedor.bairro,
    vendedor.tipo,
    vendedor.cpf,
    vendedor.cidade,
    vendedor.uf,
    headerProduto,
  ]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
});

server.delete("/vendedores/:id_vendedor", async (req, res) => {
  let headerVendedor = req.params.id_vendedor;

  const result = await db.pool.query("delete from vendedor set id_vendedor=? where id_vendedor = ?", [vendedor.id_vendedor, headerVendedor]);
  res.send(JSONBig.parse(JSONBig.stringify(result)));
}); // retorna os dados após exclusão

// rotas login

server.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let query = "SELECT * FROM vendedor WHERE email = ? AND senha = ?";
  if (email != "" && password != "") {
    const result = await db.pool.query(query, [email, password]);
    // caso email e senha forem corretos e existentes
    if (result.length > 0) {
      // autentica o usuario
      req.session.loggedin = true;
      req.session.email = email;
      res.send("Gloria conectou Aleluia");
    } else {
      res.send("Email ou Senha estão incorretos!");
    }

    res.end();
  } else {
    res.send("Por favor Digite seu email e senha!");
    res.end();
  }
});

server.get("/home", function (req, res) {
  if (req.session.loggedin) {
    //caso esteja logado
    res.send("Welcome back, " + req.session.email + "!");
  } else {
    //caso nao esteja logado
    res.send("Esteja conectado para visualizar está pagina");
  }
  res.end();
});

server.get("/logout", function (request, response, next) {
  //destruindo a session e redericionando para home
  req.session.destroy();
  response.redirect("/");
});

server.listen(3000);
