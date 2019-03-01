var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burgers.js");

//Create our routes
//GET route
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//POST route
router.post("/index", function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/");
    });
});

//PUT route
router.put("/:id", function (req,res) {
    var id = req.params.id;
    console.log("id", id);
    burger.updateOne(id, function () {
        res.redirect("/index");
    });
});

// Export routes for server.js to use.
module.exports = router;