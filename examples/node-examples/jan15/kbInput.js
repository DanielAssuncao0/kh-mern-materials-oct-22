// importing the readline-sync library
let read = require("readline-sync");
let username = read.question("Enter name: ");
let password = read.questionNewPassword("Enter password: ");
let phone = read.questionInt("Enter phone: ");

console.log(`Hello ${username}, you entered password: ${password} and phone: ${phone}`);