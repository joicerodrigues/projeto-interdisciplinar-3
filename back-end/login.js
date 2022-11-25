const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
import db from './databaseConnect.js';

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(request, response) {
	
	response.sendFile(path.join(__dirname + './login'));
});


app.post('/auth', function(request, response) {

	let email = request.body.email;
	let password = request.body.password;
	
	if (email && password) {
		
		db.query('SELECT FROM login WHERE email = ? AND senha = ?', [email, password], function(error, results, fields) {

			if (error) throw error;
	
			if (results.length > 0) {
				
				request.session.loggedin = true;
				request.session.email = email;
				
				response.redirect('/home');
			} else {
				response.send('Incorrect email and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter email and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	
	if (request.session.loggedin) {
		
		response.send('Welcome back, ' + request.session.email + '!');
	} else {
		
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);