var business = "Dept Co.";
var departmentId = ["d001", "d002", "d003", "d004", ]; 
var departments = ["Management", "Development", "Sales", "Marketing" ];
var employeeId = [ [100, 102, 103, 104, 500], [200, 201, 202, 203, 204, 205], [300, 301, 302, 303], [400, 401, 402] ];
var salaries = [ [85000, 85000, 95000, 105000, 150000], [65000, 65000, 75000, 75000, 85000, 95000], [55000, 65000, 75000, 95000], [55000, 65000, 75000] ];
var employeeName = [ ["Ruth", "Sofía", "Elias", "Mathias", "Claude"], ["Kai", "Isaiah", "Amare", "Nadia", "Nolan", "Jason"], ["Alejandro", "Steven", "Brodi", "Mary"], ["Jose", "Nia", "Alicia"] ];

var totalDeptSalary = 0;

for (var i = 0; i < departmentId.length; i++) {
    var thisDeptSalaryTotal = 0;
    console.log(`Department ${departmentId[i]} - ${departments[i]}:`);
       for (var j = 0; j < employeeId[i].length; j++) {
           console.log(`  ${j+1}. Employee ID: ${employeeId[i][j]}, Name: ${employeeName[i][j]}, Salary: ${salaries[i][j]}`);
       totalDeptSalary += salaries[i][j];
       thisDeptSalaryTotal += salaries[i][j];
    }
    console.log(`Total Salary for ${departments[i]} is $${thisDeptSalaryTotal}`);
    console.log(`\n`);
}
 console.log(`Total salaries all departments $ ${totalDeptSalary}`);
