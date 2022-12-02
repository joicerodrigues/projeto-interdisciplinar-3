import express from 'express';
import session from 'express-session';
import path from 'path';
import db from './databaseConnect.js';

var router = express.Router();
const server = express();

//utilizando sessão


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
//server.use(express.static(path.join(__dirname, 'static')));  

server.get('/login', async (req, res) => {
	try {
		const result = await db.pool.query("select * from usuario");
		res.send(result);
	} catch (err) {
		throw err;
	}
  });

server.post('/00', function(req, res) {

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

server.listen(1000);