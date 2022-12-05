const mysql = require("mysql2");

const connectProds = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "products_db",
  password: "rafPQR2JnP!"
});

module.exports = connectProds