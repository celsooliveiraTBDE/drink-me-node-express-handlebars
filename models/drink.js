// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var drink = {
  all: function(cb) {
    orm.selectAll("drinks", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("drinks", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("drinks", objColVals, condition, function(res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller (drinksController.js).
module.exports = drink;
