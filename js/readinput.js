const readline = require('readline-sync'); // allows access to external library

var num1 = readline.question("Enter the first number: ");
var num2 = readline.question("Enter the second number: ");

//console.log("The product of", num1, "and", num2, "is", num1 * num2);
console.log(`The product of ${num1} and ${num2} is:`, num1 * num2);