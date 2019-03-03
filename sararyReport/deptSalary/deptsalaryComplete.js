var fs = require('fs');
/*git sCreate all single and multi arrarys as empty arrays push single sting data elements into an array as a single element push array data into an array to form multi d arrays */

//single arrays
var departmentId = [];
var departments = [];
//will become multi dimensional arrays
var employeeId = [];
var employeeName = [];
var salaries = [];

//function to calculate department salaries and display sorted info baded on employee id
function salary_Calculation() {
    var deptSalaryCounter = [];
    var salaryCounter = 0;
  //Validate that all variables have been calculated
    if (salaries[0][0] == "0" || employeeName[0][0] == "This Department has No Employees" || employeeId[0][0] == "" || departments[0] == "" || departmentId[0] == ""){
        console.log(`Data Failure, try again`);
    } else {
       for (var q = 0; q < salaries.length; q++) {
            var salaryCounter = 0;
            deptSalaryCounter.push([]);
            for (var r = 0; r < salaries[q].length; r++) {
                 salaryCounter += parseInt(salaries[q][r]);
            }
            deptSalaryCounter[q].push(salaryCounter);
        }

        console.log(`Salary Report: \n`);
        //Calculate Sum by Department
        for (var s = 0; s < deptSalaryCounter.length; s++) {
            console.log(`${departments[s]} Department ${departmentId[s]} Annual Salary: $${deptSalaryCounter[s]}`);
            for (var t = 0; t < employeeName[s].length; t++) {
                if (deptSalaryCounter[s] == 0) {
                    console.log(`${employeeName[s][t]} and ${employeeId[s][t]}`);
                } else {
            console.log(`Employee: #${employeeId[s][t]} Name: ${employeeName[s][t]} Current Salary: $${salaries[s][t]}`); //multidimensional        
            }
         }
         console.log(`\n`);
        }
}
}

//Load 'load_dept_names.txt' and populte deptartmentId and departments in single dimensional arrays
//push placeholders to multidimensional arrays
fs.readFile('load_dept_names.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
    var deptDataArray = deptDataClean.split('\n');

    for (var i = 0; i < deptDataArray.length; i++) {
//populate single-dimensional arrays with DATA
        departmentId.push(deptDataArray[i].slice(2,6));
        departments.push(deptDataArray[i].slice(9,-3));
//populate multi-dimensional Arrays with empty sub-arrays (sans Data!)
        employeeId.push([]);
        employeeName.push([]);
        salaries.push([]);
    }
});

//Employee by Department //Isolate id slice, department slice and 9999 status slice to compare 
//If the employee is current (9999) then push their id# to the sub array at the index of their department Id
fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var employeeDataClean = data.replace(/INSERT INTO 'dept_emp' VALUES /g, "");
    var employeeDataArray = employeeDataClean.split('\n');

    for (var j = 0; j < employeeDataArray.length; j++) {
        if (employeeDataArray[j].slice(28,32) == '9999'){

            employeeId[departmentId.indexOf(employeeDataArray[j].slice(8,12))].push(employeeDataArray[j].slice(1,6));
        } 
    }
    //Populate subArrays for departments without employees  
    for (var k = 0; k < employeeId.length; k++) {
        if (employeeId[k] == "") {
            employeeId[k].push("No Employee Id's to list");
        }
    }
});

var salaryDataClean;
var salaryDataArray;

//Isolate each employees current salary by ID and push to salaries multidimensional array 
//employee id, employee salary, 9999 status
fs.readFile('load_salaries1.txt', 'utf8', function(err, data) {
    if (err) throw err;
        salaryDataClean = data.replace(/INSERT INTO `salaries` VALUES /g, "");
        salaryDataArray = salaryDataClean.split('\n');

//current salary for Employee Id 
    for (var k = 0; k < salaryDataArray.length; k++) {
        if (salaryDataArray[k].slice(27,31) == '9999') {

        for (var l = 0; l < employeeId.length; l++){
            for (var m = 0; m < employeeId[l].length; m++)
                if (employeeId[l][m] == salaryDataArray[k].slice(1,6)) {
                    salaries[l].push(salaryDataArray[k].slice(7,12));
                }
            }
        }
    }
    //push Zeros as placeholders for departments without employees/salaries
    for (var n = 0; n < salaries.length; n++){
            if (salaries[n] == "") {
                salaries[n].push(0);
            }
        }
});

//Isolate Employee NAMES by Id and push to employeeName multidimensional array
fs.readFile('load_employee.txt', 'utf8', function(err,data) {
    if(err) throw err;
    var employeeNameClear = data.replace(/INSERT INTO `employees` VALUES /, "").replace(/,/g, "").replace(/'/g, " ");  //combine??
    var employeeAgregate = employeeNameClear.split("\n");

for (var n = 0; n < employeeAgregate.length; n++) {
    for (var o = 0; o < employeeId.length; o++){
        for (var p = 0; p < employeeId[o].length; p++){
            if (employeeId[o][p] == employeeAgregate[n].slice(1,6)) {
               employeeName[o].push(employeeAgregate[n].slice(19,-16));
               }
            }
        }
    }

for (var y = 0; y < employeeName.length; y++) {
    if (employeeName[y] == "") {
        employeeName[y].push("This Department has No Employees");
    } else {
    }
} 
//After all info is cleaned/sorted/pushed calculate salaries
    salary_Calculation();
});
 /*
//validate js:73 at employeeId and/or employeeDataArray
employeeId[departmentId.indexOf(employeeDataArray[j].slice(8,12))].push(employeeDataArray[j].slice(1,6));
^

TypeError: Cannot read property 'push' of undefined
*/