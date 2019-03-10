var fs = require('fs');
//create all single-d and muilti-d arrays as an ampty arrays (intially)
//push single string data/element into an array as a single element
//push array data into an array to form muilt-d arrays.

// single-d array
var departmentId = [];
var departments = [];

// multi-d array
var employeeId = [];
var employeeName = [];
var salaries = [];

//process load_dept_name.txt file
fs.readFile('load_dept_names.txt', 'utf8', function(error, data){
   if (error) throw error;
   
   var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g,""); // is global
   var deptDataArray = deptDataClean.split('\n');
   
   for (var i = 0; i < deptDataArray.length; i++){
       departmentId.push(deptDataArray[i].slice(2,6));
       departments.push(deptDataArray[i].slice(9,-3));

       // populate muilt-d arrays with empty sub-arrays (NO DATA!!)
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

// process load_dept_name.txt file
fs.readFile('load_dept_emp.txt', 'utf8', function(error, data){
  if (error) throw error;
  
  var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES /g," "); // g is global
  var employeeDataArray = employeeDataClean.split('\n');
  
  for (var i = 0; i < employeeDataArray.length; i++){
      if (employeeDataArray[i].slice(28, 32) == '9999'){
          //console.log(employeeDataArray[i].slice(8,12));
          //console.log(employeeDataArray[i].slice(1,6));
          employeeId[departmentId.indexOf(employeeDataArray[i].slice(8,12))].push(employeeDataArray[i].slice(1,6));
      }
  }
  console.log(" NOW SHOWING EMPLOYEE IDS ");
  console.log(employeeId);
});

fs.readFile('load_salaries1.txt', 'utf8', function(error, data) {
   if (error) throw error;
   
   var salaryDataClean = data.replace(/INSERT INTO `salaries` VALUES /g, ""); // g is global
   var salaryDataArray = salaryDataClean.split('\n');
   
   for (var i = 0; i < salaryDataArray.length; i++) {
       //console.log("Salary");
        //console.log("line 64", salaryDataArray[i].slice(27, 31));
       if (salaryDataArray[i].slice(27, 31) == '9999') { //16
         //console.log("Current Salary, EmployeeId: ");
         //console.log("line 67", salaryDataArray[i].slice(1,6));
           for (var j = 0; j < employeeId.length; j++) {
               for (var k = 0; k < employeeId[j].length; k++) {
                   if(salaryDataArray[i].slice(1,6) == employeeId[j][k]) {
                       salaries[j].push(salaryDataArray[i].slice(7, 12));
                       console.log("line 72", salaryDataArray[i].slice(7, 12));
                   }
               }
           }
       }
   }
   console.log(" NOW SHOWING SALARIES ");
   console.log(salaries);
});

fs.readFile('load_employee.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    var nameSplit, nameSplitId, joinedNames;
    var nameDataClean = data.replace(/INSERT INTO `employees` VALUES /g, "");
    var nameDataArray = nameDataClean.split('\n');

    for (var i = 0; i < nameDataArray.length; i++) {
        nameSplit = nameDataArray[i].split(',');
        nameSplitId = nameSplit[0].replace(/\(/g, "");

       //  console.log("nameSplit");
       //  console.log(nameSplit);

        // console.log("nameSplitId");
       //  console.log(nameSplitId);

        // console.log("nameSplit[2]");
         //console.log(nameSplit[2]);

        for (var j = 0; j < employeeId.length; j++) {
            for (var k = 0; k < employeeId[j].length; k++) {
                if (employeeId[j][k] == nameSplitId) {
                    //["a", "b", "c", "d"].slice(1,3).join("-") //b-c 
                    // employeeName[j].push(nameSplit.slice(2,4).join(" ")
                     console.log( "line 106 ", [j], [k], " " + nameSplit[2].replace(/'/g, ""), nameSplit[3].replace(/'/g, ""));

                    joinedNames = nameSplit[2].replace(/'/g, "") + " " + nameSplit[3].replace(/'/g, "");
                    employeeName[j].push(joinedNames);
                }
            }
        }
    }
    console.log(" NOW SHOWING EMPLOYEE NAMES ");
    console.log(employeeName);
    //console.log(employeeName[0][0]);
});

// // GETTING SALARY BY DEPARTMENT 
// function totalSalaryByDept(){
//     for (var i = 0; i < salaries.length; i++) {
//         var sum = 0;
//         for (var j = 0; j < salaries[i].length; j++){
//         sum += salaries[i][j];
//         }
//     }
//     console.log(`Department ${departments[i]}: $${sum}`);
//     console.log("------------------------------------------------");
// }


// // GETTING THE OVERALL SALARY
// function totalSalaryForAllDept(){
//     var total = 0;
//     for (var i = 0; i < salaries.length; i++) {
//         for (var j = 0; j < salaries[i].length; j++) {
//             total += salaries[i][j];
//         }
//     }
//     console.log(`The total salary for all departments: $${total}`);
//     console.log("------------------------------------------------");
// }

// totalSalaryByDept();
// totalSalaryForAllDept();