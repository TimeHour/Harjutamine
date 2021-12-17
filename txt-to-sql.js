var fs = require('fs')

fs.readFile("LE.txt", 'utf8', function (err,data) {
const lines = data.split("\n")
const str = data;

var formatted = ""
for (var line of lines) {
    formatted += '('+line.replace(/\t/g,',')+'),\n';

  
 }
 fs.writeFile('LE2.txt', formatted, 'utf8', function (err) {
if (err) return console.log(err);
});
});


///////esimene osa