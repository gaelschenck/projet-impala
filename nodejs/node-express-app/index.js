const express = require('express');
const app = express();
const connection = require('./connexion.js');
const create_tables = require('./create_tables.js');
const routes = require('./routes.js');
let mysql = require('mysql');

//Middleware
// const cors = require('cors')
// app.use(cors());
app.use(express.json());
app.listen(5000, ()=> {
	console.log('1:Server is listening @5000') ;
});

console.log('1:Get connection ...');

//initialisation des modules
create_tables.createResto(connection);
create_tables.createEmploye(connection);
routes.route(connection, app, mysql);
	// console.log(create_tables);
	// console.log(routes);

// var connection = mysql.createConnection({
//   database: 'restaurants',
//   host: "localhost",
//   user: "root",
//   password: "root"
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");




// // Création de la table restaurants
// 	let createTableRestaurant = "CREATE TABLE IF NOT EXISTS restaurants (id INT(11) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), city VARCHAR(100), nbcouverts INT(10), terrasse VARCHAR(3), parking VARCHAR(3))";
// 	connection.query(createTableRestaurant, function (err, result) {
// 	if (err) throw err;
// 	console.log("table restaurants créée");
// 	});

// // Création de la table employés
// 	let createTableEmployes = "CREATE TABLE IF NOT EXISTS employes (id INT(11) AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), hire_date DATE, idResto INT(11)) ";
// 	connection.query(createTableEmployes, function (err, result) {
// 	if (err) throw err;
// 	console.log("table employes créée");
//    });

// // Route /POST/restaurant
// 	app.post('/restaurant', (req, res) => {
//         let sql = "INSERT INTO restaurants (name, city, nbcouverts, terrasse, parking) " +
//            " VALUES ('" + req.body.name + "', '" 
//                         + req.body.city + "', '"
//                         + req.body.nbcouverts + "', '"
//                         + req.body.terrasse + "', '"
//                         + req.body.parking  + "')";

//         connection.query(sql, function(err, results) {
//            if (err) throw err;
//            console.log("Insert a record !");
//        });

//        res.status(200);
//     });

// // Route /GET/restaurants
// 	app.get('/restaurants', (req, res) => {
//         var sql_template = "Select * from ?? ";
//         var replaces = ['restaurants'];
   
//         sql = mysql.format(sql_template, replaces);

//         connection.query(sql, function(err, rows) {
// 			console.log(rows);			
//             if (err) throw err;
//             res.send(rows)
//         });
//         res.status(200);
//     });


// // Route /GET/restaurants/:id
// 	app.get('/restaurants/:id', (req, res) => {
// 		let id = parseInt(req.params.id);
		
// 		let sql_template = "Select * from ?? WHERE ?? = " + id;
// 		let replaces = ['restaurants', 'id'];

// 		sql = mysql.format(sql_template, replaces);

// 		connection.query(sql, function(err, row, fields) {
// 			if (err) throw err;
// 			res.send(row);

// 		});
// 			res.status(200);
// 	});

// // Route /PUT/restaurants/:id
// 	app.put('/restaurants/:id', (req, res) => {
// 		let id = parseInt(req.params.id);

// 		let sql_template = "UPDATE ??" + 
// 							"SET name ='" + req.body.name +
// 							"', city ='" + req.body.city +
// 							"', nbcouverts ='" + req.body.nbcouverts + 
// 							"', terrasse = '" + req.body.terrasse +
// 							"', parking = '" + req.body.parking  +
// 							"'WHERE ?? = " + id;
// 			let replaces = ['restaurants', 'id'];
		
// 		sql = mysql.format(sql_template, replaces);
		
// 			connection.query(sql, function(err, row, fields) {
// 				if (err) throw err;
// 				res.send(row);
// 			});
// 		res.status(200);
// 	})

// //Route /DELETE/restaurants/:id
// 	app.delete('/restaurants/:id', (req, res) => {
// 		let id = parseInt(req.params.id);
		
// 		let sql_template = "DELETE * from ?? JOIN ?? ON restaurants.id = employes.idResto WHERE restaurants.id = " + id;
// 		let replaces = ['restaurants','employes'];

// 		sql = mysql.format(sql_template, replaces);

// 		connection.query(sql, function(err, row, fields) {
// 			if (err) throw err;
// 			res.send(row);

// 		});
// 			res.status(200);
// 	});

// // POST /restaurants/:idResto/employe
// 	app.post('/restaurant/:idResto/employe', (req, res) => {
// 		let sql = "INSERT INTO employes (first_name, last_name, hire_date, idResto) " +
// 		" VALUES ('" + req.body.first_name + "', '" 
// 						+ req.body.last_name + "', STR_TO_DATE('"
// 						+ req.body.hire_date + "','%d/%m/%Y'), '"
// 						+ req.body.idResto + "') ";

// 		connection.query(sql, function(err, results) {
// 		if (err) throw err;
// 		console.log("Insert a record !");
// 	});

// 	res.status(200);
// 	});
// // GET /restaurants/:idResto /employes
// 	app.get('/restaurants/:idResto/employes', (req, res) => {
// 		let idResto = parseInt(req.params.idResto);

// 		var sql_template = "Select * from ?? WHERE ?? =" + idResto;
// 		var replaces = ['employes', 'idResto'];

// 		sql = mysql.format(sql_template, replaces);

// 		connection.query(sql, function(err, rows) {
// 			if (err) throw err;
// 			res.send(rows)
// 		});
// 		res.status(200);
// 	});
// // GET /restaurants/:idResto /employes/:idEmploye
// app.get('/restaurants/:idResto/employes/:id', (req, res) => {
// 	let idResto = parseInt(req.params.idResto);
// 	let id = parseInt(req.params.id);
	
// 	let sql_template = "Select * from ?? WHERE ?? = '" + idResto + "' AND ?? = " + id;
// 	let replaces = ['employes', 'idResto', 'id'];

// 	sql = mysql.format(sql_template, replaces);

// 	connection.query(sql, function(err, row, fields) {
// 		if (err) throw err;
// 		res.send(row);

// 	});
// 		res.status(200);
// });
// // PUT /restaurants/:idResto /employes/:idEmploye
// 	app.put('/restaurants/:idResto/employes/:id', (req, res) => {
// 		let idResto = parseInt(req.params.idResto);
// 		let id = parseInt(req.params.id);

// 		let sql_template = "UPDATE ??" + 
// 							"SET first_name ='" + req.body.first_name +
// 							"', last_name ='" + req.body.last_name +
// 							"', hire_date ='" + req.body.hire_date + 
														
// 							"'WHERE ?? = '" + idResto +
// 							"' AND ?? = " + id;
// 			let replaces = ['employes', 'idResto', 'id'];
		
// 		sql = mysql.format(sql_template, replaces);
		
// 			connection.query(sql, function(err, row, fields) {
// 				if (err) throw err;
// 				res.send(row);
// 			});
// 		res.status(200);
// 	})
// // DELETE/restaurants/:idResto /employes/:idEmploye
// 	app.delete('/restaurants/:idResto /employes/:id', (req, res) => {
// 		let idResto = parseInt(req.params.idResto);
// 		let id = parseInt(req.params.id);
		
// 		let sql_template = "DELETE * from ?? WHERE ?? = '" + idResto + "' AND ?? = " + id;
// 		let replaces = ['employes', 'idResto', 'id'];

// 		sql = mysql.format(sql_template, replaces);

// 		connection.query(sql, function(err, row, fields) {
// 			if (err) throw err;
// 			res.send(row);

// 		});
// 			res.status(200);
// 	});

// // connection.end();
// });
