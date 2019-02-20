
//CLEAN load_dept_emp.txt
//clean data to remove titles
//clean data to remove ()
//instantiate arrays 
//assign the data to the arrays
//print each array
const Regex = require("regex");
const fs = require('fs');

//let arrayEmpDept = [];

fs.readFile("./datasets/load_dept_emp.txt", 'utf8', function(err, data) {
    if (err) throw err; //throw isa console log and new line
    //arrayEmpDept = data.split("\n");
    //arrayEmpDept = data;
    //var loadDeptArray = data;
    //var loadDeptArray = data.replace(/[a-z]/gi);
    var loadDeptArray = data.replace(/INSERT INTO 'dept_emp' VALUES /g, "");
    //console.log(arrayEmpDept);
    //console.log(loadDeptArray);
    var splitLoadDeptArray = loadDeptArray.split("\n");
    //console.log(splitLoadDeptArray[0]);
    // console.log(splitLoadDeptArray[0]);
    // for (var i = 0; i < arraydat.length; i++) {
    // console.log(`The data on line ${i + 1} is ${arraydat[i]}`);
    // }
for (var i = 0; i < splitLoadDeptArray.length; i++) {
    if (splitLoadDeptArray[i].slice(28,32) == '9999') {
        console.log(splitLoadDeptArray[i]);
    }
 }


})


//console.log(arrayEmpDept[0]);
// fs.readFile("./datasets/load_dept_names.txt", 'utf8', function(err, data) {
//     if (err) throw err; //throw isa console log and new line
//     var arrayDeptNames = data.split("\n");
//     console.log(arrayDeptNames);
//     // for (var i = 0; i < arraydat.length; i++) {
//     // console.log(`The data on line ${i + 1} is ${arraydat[i]}`);
//     // }
// })

// fs.readFile("./datasets/load_employee.txt", 'utf8', function(err, data) {
//     if (err) throw err; //throw isa console log and new line
//     var arrayEmployees = data.split("\n");
//     console.log(arrayEmployees);
//     // for (var i = 0; i < arraydat.length; i++) {
//     // console.log(`The data on line ${i + 1} is ${arraydat[i]}`);
//     // }
// })

// fs.readFile("./datasets/load_salaries1.txt", 'utf8', function(err, data) {
//     if (err) throw err; //throw isa console log and new line
//     var arraySalaries = data.split("\n");
//     console.log(arraySalaries);
//     // for (var i = 0; i < arraydat.length; i++) {
//     // console.log(`The data on line ${i + 1} is ${arraydat[i]}`);
//     // }
// })






















// fs.open('/datasets/load_dept_emp.txt', 'r', (err, fd) => {
//     if (err) throw err;
//     fs.fstat(fd, (err, stat) => {
//         if (err) throw err;



//     fs.close(fd, (err) => {
//         if (err) throw err;
//     });
//     });
// });
// const regexDeptEmp = new Regex(/INSERT INTO `dept_emp` VALUES /);

