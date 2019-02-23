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

// Process 'load_dept_names.txt' file  populte deptartmentId and departments
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

    console.log(`Departments are: ${departmentId}`);
    console.log(`Departments are: ${departments}`);
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
    console.log(`Employee ids are: ${employeeId}`);
   // console.log(employeeDataClean);
   // console.log(employeeDataArray);
});


//procure the employee current salary by Id
fs.readFile('load_salaries1.txt', 'utf8', function(err, data) {
if (err) throw err;
var salaryAgregate = data.split('\n');
//console.log(`Salaries are: ${salaryAgregate}`);

//current salary for Employee Id 
for (var j = 0; j < salaryAgregate.length; j++) {
    if (salaryAgregate[j].slice(27,31) == 9999) {
    console.log(`Employee ${salaryAgregate[j].slice(1,6)} earned $: ${salaryAgregate[j].slice(7,12)} in year: ${salaryAgregate[j].slice(27,31)}`);
}
}
});



console.log(`Employee names are: ${employeeName}`);









/*


// Process 'load_employee.txt' file 
fs.readFile('load_employee.txt', 'utf8', function(err, data) {
    if (err) throw err;

    var employeeNameArray = data.slice("\n");
   // console.log(employeeNameArray);

 
for (var i = 0; i < employeeNameArray.length; i++) {
    employeeName.push(employeeNameArray[i].slice(22,-20));
}
console.log(employeeName);
//splice data from employeeNameArray (22,-19)
//employeeName[].push(emplyeeNameArray.slice(22,-19));
//}
});

*/