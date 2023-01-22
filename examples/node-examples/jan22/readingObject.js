let fs = require('fs');
let empBin = fs.readFileSync('emps.json');
let empString = empBin.toString();
console.log(empString);
// accessing id, name & salary properties, we need to do a conversion
let emp = JSON.parse(empString);
console.log(`Id = ${emp.id}`);
console.log(`Name = ${emp.name}`);
console.log(`Salary = ${emp.salary}`);