var mysql = require("mysql");
// Inside the connection.js file, we setup the code to connect Node to MySQL.

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "drinks_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
// Export the connection.