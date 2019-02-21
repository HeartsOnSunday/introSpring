//first and last name 
//Fav color
const file = require('file-system');
const fs = require('fs');

//file.readfile === fs.readfile

// 

function fileread(inputs) {
    var contents = fs.readFileSynch(inputs);
    console.log(contents)
    console.log(derp);
    return contents

}
