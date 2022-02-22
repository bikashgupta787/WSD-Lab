const {readFileSync, read, readFile} = require('fs')
var loadjson = ()=>JSON.parse(readFileSync('stu.json'))
var data = readFileSync('stu.json')
console.log(JSON.parse(data)['stu'][0])
module.exports = {loadjson};