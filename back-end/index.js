const express = require('express'); // importando express
const server = express(); // variavel chamada server que chama a função express

server.get('/teste', (req, res) => { //rota /teste com
    //console.log('teste');
    return res.json( {message: 'teste'} );
    })

    server.listen(3000); // faz com que o servidor seja execujado nessa porta especifica
