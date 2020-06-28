var connection = require("./connection.js");


var orm = {
    selectAll: function(cb) {
      let queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(data)
      });
    },
    insertOne: function(col, val, cb) {
      let queryString = `INSERT INTO burgers (${col}) VALUES(?)`;
      connection.query(queryString, val, function(err, result) {
        if (err) throw err;
        cb(data)
      });
    },
    updateOne: function(col, val, cb) {
      let queryString = `UPDATE burgers SET devoured=${val} WHERE id = ${id}`;
      connection.query(queryString, function(err,data) {
          if (err) throw err;
          cb(data)
        }
      );
    }
  };
  
  module.exports = orm;