var fs = require('fs')

fs.readFile("LE.txt", 'utf8', function (err,data) {
const lines = data.split("\n")
const str = data;

for (var line of lines) {
var formatted = '('+line.replace(/\t/g,',')+'),\n';
fs.appendFile('LE2.txt', formatted, 'utf8', function (err) {
if (err) return console.log(err);
});
  
 }
});