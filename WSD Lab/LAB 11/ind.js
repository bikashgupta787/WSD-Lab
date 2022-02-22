const http = require('http')
const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require("fs");
const { callbackify } = require("util");
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log("Server is runnning"));
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})



// Read users.json file
fs.readFile("stu.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const books = JSON.parse(data);

    console.log(stu); // Print users
});



var newstuDetails = {
  "id":7,
  "name":"Alok Behera",
  "age":"21",
  "gender":"Male",
  "course":"MCA",
  "address":"Delhi",
  "grade":"A"
}



fs.writeFile("newstu.json", JSON.stringify(newstuDetails, null, 2), err => {
    if (err) throw err;
    console.log("File written sucessfully!");
})