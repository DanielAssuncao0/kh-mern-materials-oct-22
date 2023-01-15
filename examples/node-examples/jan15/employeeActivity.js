let Employee = require('./employee');
let read = require('readline-sync');

// array to store employee objects in a loop
let items = [];
let input = "";

do {
    // accept id, name & gender from the console
    let id = read.questionInt("Enter id: ");
    let name = read.question("Enter name: ");
    let gender = read.question("Enter gender: ");
    // create Employee object by passing input to the constructor
    let emp = new Employee(id, name, gender);
    // add Employee object to the array
    items.push(emp);
    input = read.question("If you want to exit type quit else type anything to continue: ")
} while(input != "quit");

items.forEach((item, index) => {
    item.display();
});