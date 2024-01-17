let mysql = require('mysql');

console.log('Get connection ...');

var connection = mysql.createConnection({
  database: "testnodejs",
  host: "localhost",
  user: "root",
  password: "root"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

   // Drop EMPLOYEES table if Exists!!
   var sql1 = "DROP TABLE IF EXISTS Employes ";

   connection.query(sql1, function(err, results) {
       if (err) throw err;
       console.log("Table Employes dropped");
   });

   // Create EMPLOYEES Table.
   var sql2 = "CREATE TABLE Employes(" +
    "Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, " +
    "firstname VARCHAR(150) NOT NULL," +
    "lastname VARCHAR(150) NOT NULL," +
    "hire_date DATE )";

   connection.query(sql2, function(err, results) {
       if (err) throw err;
       console.log("Table Employés créée");
   });

   var firstNames = ["John", "Jack", "Paul"];
   var fullNames = ["Hikes", "Smith", "Gates"];
   var hireDates = ["22/10/2001", "11/11/2000", "12/12/1990"];

   // Insert Datas to EMPLOYEES.
   for (var i = 0; i < firstNames.length; i++) {
       var sql3 = "INSERT INTO Employes " +
        "(firstname, lastname, hire_date )" +
         "VALUES ('" +
          firstNames[i] +
           "','" +
            fullNames[i] +
             "', STR_TO_DATE('" + hireDates[i]+ "','%d/%m/%Y'))";
   
       connection.query(sql3, function(err, results) {
           if (err) throw err;
           console.log("Insert a record!");
     });

    }});