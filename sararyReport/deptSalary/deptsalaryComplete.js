var fs = require('fs');
/* 1. Create all single and multi arrarys as empty arrays push single sting data elements into an array as a single element push array data into an array to form multi d arrays */

//single arrays
var departmentId = [];
var departments = [];
//will become multi dimensional arrays
var employeeId = [];
var employeeName = [];
var salaries = [];
//console.log(`Empty array: ${salaries}`);
//////////////////////////////////////////////////FIXITHERE!!! FOR LOOP WITH Q AND R NOT WORKING
//function to calculate department salaries
function salary_Calculation() {
    var deptSalaryCounter = [];
    var salaryCounter = 0;
       for (var q = 0; q < salaries.length; q++) {
           
            deptSalaryCounter.push([]);
            for (var r = 0; r < salaries[q].length; r++) {
                 salaryCounter += parseInt(salaries[q][r]);
                 //salaryCounter += salaries[q][r];
                 console.log(`Curent salary: ${salaries[q][r]}`);
            }
            deptSalaryCounter[q].push(salaryCounter);
        }
        console.log(`Department totals are: ${deptSalaryCounter}`);
        //console.log(`Is this a number: ${parseInt(salaries[0][0])}`);
        console.log(`Salary Report: \n`);
        //Sum that shit up!
        for (var s = 0; s < deptSalaryCounter.length; s++) {
            console.log(`${departments[s]} Department ${departmentId[s]} Annual Salary: ${deptSalaryCounter[s]} \n`);
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
    //console.log(`Empty salaries: ${salaries}`);
    //console.log(`Departments Id numbers are: ${departmentId}`); VALIDATED
    //console.log(`Department Names are: ${departments}`); VALIDATED
});

//Employee by Department //id slice, department slice and 9999 status slice
fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var employeeDataClean = data.replace(/INSERT INTO 'dept_emp' VALUES /g, "");
    var employeeDataArray = employeeDataClean.split('\n');

    for (var j = 0; j < employeeDataArray.length; j++) {
        if (employeeDataArray[j].slice(28,32) == '9999'){

            employeeId[departmentId.indexOf(employeeDataArray[j].slice(8,12))].push(employeeDataArray[j].slice(1,6));
            //console.log(`Employee #: ${employeeDataArray[j].slice(1,6)} works in department # ${employeeDataArray[j].slice(8,12)}`); //VALID
        } 
    }
    //Populate subArrays for departments without employees  
    for (var x = 0; x < employeeId.length; x++) {
        if (employeeId[x] == "") {
            employeeId[x].push("N/A");
        }
    }

    console.log(`Employee ids are: ${employeeId}`);
  
});

var salaryDataClean;
var salaryDataArray;

//Salary by ID
//push to salaries
//employee id, employee salary, 9999 status
fs.readFile('load_salaries1.txt', 'utf8', function(err, data) {
    if (err) throw err;
        salaryDataClean = data.replace(/INSERT INTO `salaries` VALUES /g, "");
        salaryDataArray = salaryDataClean.split('\n');

//current salary for Employee Id 
    for (var k = 0; k < salaryDataArray.length; k++) {
        if (salaryDataArray[k].slice(27,31) == '9999') {
            //console.log(`Employee ${salaryDataArray[k].slice(1,6)} earned $: ${salaryDataArray[k].slice(7,12)} in year: ${salaryDataArray[k].slice(27,31)}`);

        for (var l = 0; l < employeeId.length; l++){
            for (var m = 0; m < employeeId[l].length; m++)
                if (employeeId[l][m] == salaryDataArray[k].slice(1,6)) {
                    salaries[l].push(salaryDataArray[k].slice(7,12));
                }
            }
        }
    }
    //push Zeros as placeholders
    for (var n = 0; n < salaries.length; n++){
            if (salaries[n] == "") {
                salaries[n].push(0);
            }
        }
console.log(`salaries are: ${salaries}`);
});

//Employee NAMES by ID
//push to employeeName
//employee id and name
fs.readFile('load_employee.txt', 'utf8', function(err,data) {
    if(err) throw err;
    var employeeNameClear = data.replace(/INSERT INTO `employees` VALUES /, "").replace(/,/g, "").replace(/'/g, " ");  //combine??
    var employeeAgregate = employeeNameClear.split("\n");

for (var n = 0; n < employeeAgregate.length; n++) {
        console.log(`Employee id: '${employeeAgregate[n].slice(1,6)}' is named: ${employeeAgregate[n].slice(18,-16)}`);

    for (var o = 0; o < employeeId.length; o++){
        for (var p = 0; p < employeeId[o].length; p++){
            if (employeeId[o][p] == employeeAgregate[n].slice(1,6)) {
                //employeeName[employeeId[o].indexOf(employeeAgregate[n].slice(1,6))].push(employeeAgregate[n].slice(18,-16));
                employeeName[o].push(employeeAgregate[n].slice(18,-16));
                console.log(`Sub array: ${o} and ${p} Index of: ${employeeId[o].indexOf(employeeAgregate[n].slice(1,6))}`);
                }
            }
 ///SOMEWHERE INCLUDE PLACEHOLDERS
 //Mention that employee is no longer current with company
        }
    }

    //CREATE FOR LOOP FOR employeeName

    //CREATE if STATEMENT (IF EMPLOYEENAME[X][X] == "")
    //THEN PUSH 'N/A' TO SUB ARRAY
    console.log(`Employee names are : ${employeeName}`);
    salary_Calculation();
});



//use employeeID sub array to push salaries, names and anything else to other sub arrays.


//Why are salaries going into a single dimensional array??
//fix calculation


/*

Check for multidimensional arrays


Employee ids
numbers are valid
what array is it pushing to (because that array is multi dimensional)
is it a multi dimersional array?

Salaries
numbers are valid
is it a multi dimensional array?

Employee Names
Where are they being used?
Push N/A to those empty arrays

Current Salary 
Valid
useless



Salary Report === Needs Work!

*/