let fs = require('fs');
// checking for file existence
function checkFileExists() {
    if(!fs.existsSync('employees.json')) {
        let arr = [];
        let arrString = JSON.stringify(arr);
        fs.writeFileSync('employees.json', arrString);
        return false;
    }
    return true;
}
// reading the file
function readEmployee() {
    if(checkFileExists()) {
        let dataString = fs.readFileSync('employees.json');
        let dataArray = JSON.parse(dataString);
        return dataArray;
    } else {
        console.log('file was not present, but now its created you can re-run')
    }
}
function writeEmployee(emp) {
    if(checkFileExists()) {
        let arr = readEmployee();
        arr.push(emp);
        fs.writeFileSync('employees.json', JSON.stringify(arr));
        console.log('file is written and the number of employees are: '+arr.length);
    } 
}
module.exports = {readEmployee, writeEmployee};