// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    //SelectAll Function
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    //insertOne function
    insertOne: function (burger, cb) {
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },
    //updateOne funciton
    updateOne: function (id, cb) {
        orm.updateOne([id], function (res) {
            cb(res);
        });
    }
}

// Export the database functions
module.exports=burger;