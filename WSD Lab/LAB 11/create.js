var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bikash@15"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    con.query("CREATE DATABASE christ", function(err,result){
        if (err) throw err;
        console.log("Database Created");
    });
});
