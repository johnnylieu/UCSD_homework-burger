var express = require ("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.sender("index", hdbrsObj);
    });

    router.post("/api/burgers", function(req, res) {
        burger.insertOne(function (
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result) {
                res.json({ id: result.insertID });
            }
        ));
    })
});