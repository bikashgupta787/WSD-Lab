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
  var sql = "INSERT INTO stuinfo (id ,name, age, gender ,course , address , Grade) VALUES ?"; 
  var values = [
    ['1','Abhishek Singh','20','Male','Science','Kolkata','A'],
    ['2','Akash Singh','21','Male','Commerce','Bihar','A'],
    ['3','Shreya Mishra','22','Female','Humanities','Odisha','B'],
    ['4','Rishab Jha','21','Male','Science','UP','B'],
    ['5','Pooja Jain','22','Female','Commerce','Gujarat','A'],
    ['6','Pooja Jain','22','Female','Commerce','Gujarat','A']
 ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

