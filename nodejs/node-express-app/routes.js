// module.exports = function(connection, app, mysql){
let route = function(connection, app, mysql){
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Headers: *");
        res.header("Access-Control-Allow-Headers: Content-Type, x-requested-with")
        next();
    });

// Route /POST/restaurant

app.post('/restaurant', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
    
        // this.nouveauRestaurant.name = req.body.name;
        // this.nouveauRestaurant.city = req.body.city;
        // this.nouveauRestaurant.nbcouverts = req.body.nbcouverts;
        // this.nouveauRestaurant.terrasse = req.body.terrasse;
        // this.nouveauRestaurant.parking = req.body.parking;
    
    console.log("données à envoyer")
      console.log(this.nouveauRestaurant.city)
      console.log(this.nouveauRestaurant.name)
    let sql = "INSERT INTO restaurants (name, city, nbcouverts, terrasse, parking) " +
       " VALUES ('" + req.body.name + "', '" 
                    + req.body.city + "', '"
                    + req.body.nbcouverts + "', '"
                    + req.body.terrasse + "', '"
                    + req.body.parking  + "')";

    connection.query(sql, function(err, results) {
       if (err) throw err;
       console.log(err)
       console.log("Insert a record !");
   });

   res.status(200).send("Resto ajouté avec succès");
});

// Route /GET/restaurants

app.get('/restaurants', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
    // console.log ('coucou2');
    var sql_template = "Select * from ?? ";
    var replaces = ['restaurants'];

    var mysql = require('mysql');

    sql = mysql.format(sql_template, replaces);

    connection.query(sql, function(err, rows) {
        if (err) throw err;
        res.send(rows)
    });
    res.status(200);
});



// Route /GET/restaurants/:id
 

app.get('/restaurants/:id', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
    console.log ("lapin3")
    let id = parseInt(req.params.id);
    
    let sql_template = "Select * from ?? WHERE ?? = " + id;
    let replaces = ['restaurants', 'id'];

    sql = mysql.format(sql_template, replaces);

    connection.query(sql, function(err, row, fields) {
        if (err) throw err;
        res.send(row);

    });
        res.status(200);
});

// Route /PUT/restaurants/:id

app.put('/restaurants/:id', (req, res) => {
    console.log ("tortue2")
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
    let id = parseInt(req.params.id);

    let sql_template = "UPDATE ??" + 
                        "SET name ='" + req.body.name +
                        "', city ='" + req.body.city +
                        "', nbcouverts ='" + req.body.nbcouverts + 
                        "', terrasse = '" + req.body.terrasse +
                        "', parking = '" + req.body.parking  +
                        "'WHERE ?? = " + id;
        let replaces = ['restaurants', 'id'];
    
    sql = mysql.format(sql_template, replaces);
    
        connection.query(sql, function(err, row, fields) {
            if (err) throw err;
            res.send(row);
        });
    res.status(200);
})


//Route /DELETE/restaurants/:id

app.delete('/restaurants/:id', (req, res) => {
    console.log ("lapin2")
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
    let id = parseInt(req.params.id);
    // let sql_template = "SELECT * FROM restaurants"
    //  sql_template = "SELECT * employes"
    let sql = "DELETE re, em FROM restaurants re, employes em WHERE re.id = em.idResto AND re.id = " + id;    

    connection.query(sql, function(err, row, fields) {
        if (err) throw err;
        res.send(row);
    });
        res.status(200);
});


// POST /restaurants/:idResto/employe

app.post('/restaurant/:idResto/employe', (req, res) => {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//    next();
console.log ("tortue")
    let sql = "INSERT INTO employes (first_name, last_name, hire_date, idResto) " +
    " VALUES ('" + req.body.first_name + "', '" 
                    + req.body.last_name + "', STR_TO_DATE('"
                    + req.body.hire_date + "','%d/%m/%Y'), '"
                    + req.body.idResto + "') ";

    connection.query(sql, function(err, results) {
        if (err) throw err;
    console.log("Insert a record !");
    });
        res.status(200);
});

// GET /restaurants/:idResto /employes

app.get('/restaurants/:idResto/employes', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
    console.log ("lapin")
    // console.log(req.params)
    let idResto = parseInt(req.params.idResto);
    var sql_template = "Select * from ?? WHERE ?? =" + idResto;
    var replaces = ['employes', 'idResto'];

    var mysql = require('mysql');

    sql = mysql.format(sql_template, replaces);
    // let sql = "Select * from employes";
    // var replaces = ['employes'];

    // sql = mysql.format(sql_template, replaces);

    connection.query(sql, function(err, rows) {
        
        if (err) throw err;
        res.send(rows)
        // console.log(rows)
    });
    res.status(200);
});


// GET /restaurants/:idResto /employes/:idEmploye

app.get('/restaurants/:idResto/employes/:id', (req, res) => {
    console.log ("belette")
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
let idResto = parseInt(req.params.idResto);
let id = parseInt(req.params.id);

let sql_template = "Select * from ?? WHERE ?? = '" + idResto + "' AND ?? = " + id;
let replaces = ['employes', 'idResto', 'id'];

sql = mysql.format(sql_template, replaces);

connection.query(sql, function(err, row, fields) {
    if (err) throw err;
    res.send(row);

});
    res.status(200);
});


// PUT /restaurants/:idResto /employes/:idEmploye

app.put('/restaurants/:idResto/employes/:id', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
    console.log ("belette2")
    let idResto = parseInt(req.params.idResto);
    let id = parseInt(req.params.id);

    let sql_template = "UPDATE ??" + 
                        "SET first_name ='" + req.body.first_name +
                        "', last_name ='" + req.body.last_name +
                        "', hire_date ='" + req.body.hire_date + 
                                                    
                        "'WHERE ?? = '" + idResto +
                        "' AND ?? = " + id;
        let replaces = ['employes', 'idResto', 'id'];
    
    sql = mysql.format(sql_template, replaces);
    
        connection.query(sql, function(err, row, fields) {
            if (err) throw err;
            res.send(row);
        });
    res.status(200);
});


// DELETE/restaurants/:idResto /employes/:idEmploye

app.delete('/restaurants/:idResto/employes/:id', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // next();
    console.log("papito")
    let idResto = parseInt(req.params.idResto);
    let id = parseInt(req.params.id);
    
    let sql_template = "DELETE  FROM ?? WHERE ?? = '" + idResto + "' AND ?? = " + id;
    let replaces = ['employes', 'idResto', 'id'];

    sql = mysql.format(sql_template, replaces);

    connection.query(sql, function(err, row, fields) {
        if (err) throw err;
        res.send(row);

    });
        res.status(200);
});

}
exports.route = route;

