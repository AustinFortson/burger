//Import MySQL connection
var connection = require("./connections");

// Object for all our SQL statement functions.
var orm = {
    //SelectLL function
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //InsertOne function to add a burger
    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //Updateone function to set devored status
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object
module.exports = orm;