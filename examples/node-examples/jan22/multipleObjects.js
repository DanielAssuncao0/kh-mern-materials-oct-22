let write = require('./emp-read-write').writeEmployee;
let read = require('./emp-read-write').readEmployee;
// let emp = {id: 6, name: "Rakesh", salary:40000};
// write(emp);

let arr = read();
arr.forEach(item => console.log(item.id, item.name, item.salary))