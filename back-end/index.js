const express = require('express'); // importando express
const server = express(); // variavel chamada server que chama a função express
server.subscribe(express.json()); // faz com que o express entenda JSON
const teste = [] // array que irá armazenar infos

//listar via get
server.get('/teste', (req, res) => {
    return res.json(teste);
})

//armazenar via post
server.post('/teste', (req, res) => { //rota /teste com
    //console.log('teste');
    const{name} = req.body; // buscar nome informado dentro do body da requisição
    teste.push(name);
    return res.json( teste ); //return a info da val teste
    })

//listar users
server.get('/teste/:index', (req, res) => {
    return res.json(req.user);
})

//buscar o name informado dentro do body da requisição
server.post('/teste', (req, res) =>{
    const {name} = req.body
    teste.push(name);
    return res.json(teste);
})
server.listen(3000);

server.put('/teste/:index', (req, res) =>{
    const {index} = req.params; // recupera o index com os dados
    const {name} = req.body;
    teste[index] = name; // sobrepore o index obtido na roda de acordo com o novo valor
    return res.json(teste);
})

server.delete('/teste/:index', (req, res) =>{
    const{index} = req.params;
    teste.splice(index, 1);
    return res.send();
});

 //   server.listen(3000); // faz com que o servidor seja execujado nessa porta especifica
