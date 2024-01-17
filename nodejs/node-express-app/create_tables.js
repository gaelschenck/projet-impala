// Création de la table restaurants
    var createResto = function(connection){

        let createTableRestaurant = "CREATE TABLE IF NOT EXISTS restaurants (id INT(11) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), city VARCHAR(100), nbcouverts INT(10), terrasse VARCHAR(3), parking VARCHAR(3))";
        connection.query(createTableRestaurant, function (err, result) {
            if (err) throw err;
                console.log("table restaurants créée");
            });
        }


// Création de la table employés
    var createEmploye = function(connection){
        let createTableEmployes = "CREATE TABLE IF NOT EXISTS employes (id INT(11) AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), hire_date DATE, idResto INT(11)) ";
        connection.query(createTableEmployes, function (err, result) {
            if (err) throw err;
                console.log("table employes créée");
            });
        }


exports.createResto = createResto;
exports.createEmploye = createEmploye;