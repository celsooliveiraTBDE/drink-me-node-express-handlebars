var express = require("express");

var router = express.Router();

// Import the model (drink.js) to use its database functions.
var drink = require("../models/drink.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  drink.all(function(data) {
    var hbsObject = {
      drinks: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/drinks", function(req, res) {
  drink.create([
    "name", "sipped"
  ], [
    req.body.name, req.body.sipped
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/drinks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  drink.update({
    sipped: req.body.sipped
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/drinks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  drink.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
