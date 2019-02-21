//import fs module
const fs = require('fs');

fs.readFile("mydata.txt", 'utf8', function(err, data) {
    if (err) throw err; //throw isa console log and new line
    var arraydat = data.split("\n");
    console.log(arraydat);
    for (var i = 0; i < arraydat.length; i++) {
    console.log(`The data on line ${i + 1} is ${arraydat[i]}`);
    }

})