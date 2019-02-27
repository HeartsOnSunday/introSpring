var fs = require('fs');
/* 1. Create all single and multi arrarys as empty arrays push single sting data elements into an array as a single element push array data into an array to form multi d arrays */

//single arrays
var departmentId = [];
var departments = [];
//multi dimensional arrays
var employeeId = [];
var employeeName = [];
var salaries = [];

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

    console.log(`Departments Id numbers are: ${departmentId}`);
    console.log(`Department Names are: ${departments}`);

});

//Employee by Department
//employee Id, salary and 9999 status
fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var employeeDataClean = data.replace(/INSERT INTO 'dept_emp' VALUES /g, "");
    var employeeDataArray = employeeDataClean.split('\n');

    for (var j=0; j < employeeDataArray.length; j++) {
        if (employeeDataArray[j].slice(28,32) == '9999'){

            employeeId[departmentId.indexOf(employeeDataArray[j].slice(8,12))].push(employeeDataArray[j].slice(1,6));
            console.log(`Employee #: ${employeeDataArray[j].slice(1,6)} works in department # ${employeeDataArray[j].slice(8,12)}`)
        } 
    }
    console.log(`Employee ids are: ${employeeId}`);
  
});


//Salary by ID
//push to salaries
fs.readFile('load_salaries1.txt', 'utf8', function(err, data) {
if (err) throw err;
var salaryAgregate = data.replace(/INSERT INTO `salaries` VALUES /g, "").split('\n');


//current salary for Employee Id 
for (var k = 0; k < salaryAgregate.length; k++) {
    if (salaryAgregate[k].slice(27,31) == 9999) {
    console.log(`Employee ${salaryAgregate[k].slice(1,6)} earned $: ${salaryAgregate[k].slice(7,12)} in year: ${salaryAgregate[k].slice(27,31)}`);
}
}
});

//Employee NAMES by ID
//push to employeeName
fs.readFile('load_employee.txt', 'utf8', function(err,data) {
if(err) throw err;
var employeeNameClear = data.replace(/,/g, "").replace(/'/g, " ");
var employeeAgregate = employeeNameClear.split("\n");

for (var l = 0; l < employeeAgregate.length; l++) {
    var employeeMF = employeeAgregate[l].slice(-15, -14);
    if (employeeMF == 'M') {
console.log(`Employee id ${employeeAgregate[l].slice(1,6)} is named: ${employeeAgregate[l].slice(18,-16)} and he is ${employeeAgregate[l].slice(-15, -14)}`);
} else {
    console.log(`Employee id ${employeeAgregate[l].slice(1,6)} is named: ${employeeAgregate[l].slice(18,-16)} and she is ${employeeAgregate[l].slice(-15, -14)}`)
}
}
});


