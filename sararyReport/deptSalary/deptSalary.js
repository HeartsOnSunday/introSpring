var fs = require('fs');
/* 1. Create all single and multi arrarys as empty arrays
push single sting data elements into an array as a single element
push array data into an array to form multi d arrays */

//single arrays
var departmentId = [];
var departments = [];

//multi dimensional arrays
var employeeId = [];
var employeeName = [];
var salaries = [];

/* Process 'load_dept_names.txt' file */
fs.readFile('load_dept_names.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
    var deptDataArray = deptDataClean.split('\n');

    for (var i = 0; i < deptDataArray.length; i++){
        //populate single-dimensional arrays with DATA
        departmentId.push(deptDataArray[i].slice(2,6));
        departments.push(deptDataArray[i].slice(9,-3));

        //populate multi-dimensional Arrays with empty sub-arrays (sans Data!)
        employeeId.push([]);
        employeeName.push([]);
        salaries.push([]);
    }
    // console.log(departmentId);
    // console.log(departments);
    // console.log(employeeId);
    // console.log(employeeName);
    // console.log(salaries);


});

/* Process 'load_dept_emp.txt' file */
fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var employeeDataClean = data.replace(/INSERT INTO 'dept_emp' VALUES /g, "");
    var employeeDataArray = employeeDataClean.split('\n');

    for (var i=0; i < employeeDataArray.length; i++) {
        if (employeeDataArray[i].slice(28,32) == '9999'){
    
            employeeId[departmentId.indexOf(employeeDataArray[i].slice(8,12))].push(employeeDataArray[i].slice(2,6));
            
        } 
        //console.log(employeeDataArray[i].slice(8,12));
        //console.log(employeeDataArray[i].slice(1,6));
        //console.log(departmentId.indexOf(employeeDataArray[i].slice(8,12)));
        //console.log(employeeId[departmentId.indexOf(employeeDataArray[i].slice(7,11))].push(employeeDataArray[i].slice(2,6));)
    }


    
    console.log(employeeId);
   // console.log(employeeDataClean);
   // console.log(employeeDataArray);
});

