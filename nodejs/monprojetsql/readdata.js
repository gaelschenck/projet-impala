let mysql = require('mysql');

console.log('Get connection ...');

var myBDD = mysql.createConnection({
  database: 'testnodejs',
  host: "localhost",
  user: "root",
  password: "root"
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// tabRow=[]
//    var sql_template = "Select * from Employes ";

//    var replaces = ['Employes'];
//    sql = mysql.format(sql_template, replaces);


//    connection.query(sql, function(err, rows, fields) {
//        if (err) throw err;
//        tabRow=rows
//         connection.end();

//    });
// });

tabResult=[]
   tabResult2=[] // pas necessaire mais plus lisible
myBDD.connect(function(err) {
        if (err) throw err;
        let requeteSQL = "SELECT * FROM Employes";
        myBDD.query(requeteSQL,function (err, result, fields) {
        if (err) throw err;
        tabResult=result;
        
        exports.select = function () {
            return tabResult;
            };
            console.log (tabResult)});
        

    let requeteSQL2 = "SELECT * FROM Employes WHERE hire_date>"+'"1995-11-20"';
    myBDD.query(requeteSQL2,function (err, result2, fields) {
    if (err) throw err;
    tabResult2=result2;

    exports.select = function () {
        return tabResult2;
    };
    console.log (tabResult2)



    myBDD.end(); // pour se déconnecter après la requête
    });
});
