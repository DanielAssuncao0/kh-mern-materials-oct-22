let fs = require('fs');
let emp = {id: 100, name:"Raj", salary:4500};
let empString = JSON.stringify(emp);
fs.writeFileSync('emps.json', empString); 
console.log('File is written...');