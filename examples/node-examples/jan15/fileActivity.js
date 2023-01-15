let fs = require('fs');
let Employee = require('./employee');
let content = fs.readFileSync('test.txt');
let data = content.toString(); // convert content to string
// use split(delimiter) function of string to split the string into multiple strings
let afterSplit = data.split('|'); // afterSplit will have array of strings without delimiter
// using spread you pass all the elements of array into multiple parameters of Employee constructor
console.log(`After split array: ${afterSplit}`);
let emp = new Employee(...afterSplit); // 1st item is supplied to 1st parameter & so on
emp.display();