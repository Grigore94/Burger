var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

    //select
    router.get("/", function(req, res) {
  
      
      burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render('index',hbsObject);
      });
  
    });
    //insert
    router.post("/burger", function(req, res) {
  
      burger.insertOne(
        ["burger_name",],
        [req.body.burger_name,],
        
       function(result) {
           res.status(200).end();
      });
  
    });
    //Update 
    router.put('/burgers/:id', function(req, res) {
    let condition = req.params.id
    console.log("condition", condition)
    burger.updateOne(
        {devoured: true},
        condition,
        function (result) {
            res.status(200).end();
      })
    });
    module.exports = router;