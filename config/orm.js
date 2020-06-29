var connection = require("./connection.js");


var orm = {
    selectAll: function(cb) {
      let queryString = "SELECT * FROM burger";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result)
      });
    },
    insertOne: function(col, val, cb) {
      let queryString = `INSERT INTO burger (${col}) VALUES(?)`;
      connection.query(queryString, val, function(err, result) {
        if (err) throw err;
        cb(result)
      });
    },
    updateOne: function(val, cb) {
      let queryString = `UPDATE burger SET devoured = ${val} WHERE id = ${id}`;
      connection.query(queryString, function(err,result) {
          if (err) throw err;
          cb(result)
        }
      );
    }
  };
  
  module.exports = orm;