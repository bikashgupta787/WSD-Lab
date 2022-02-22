var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bikash@15",
  database: "christ"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE stuinfo (id int, name VARCHAR(255), age int, gender VARCHAR(255), course VARCHAR(255), address VARCHAR(255), Grade VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});             
