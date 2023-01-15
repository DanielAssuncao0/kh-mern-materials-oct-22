let fs = require("fs");
let kb = require("readline-sync");
// writing file is possible even if file doesn't exist, because it creates new file
let content = kb.question("Enter some content to write: ");

// rewrites the file 
fs.writeFileSync("test.txt", content);
// keeps the old content
fs.writeFileSync("test2.txt", content+'\n', {flag:"a+"});

// reading the same file which was written
let data1 = fs.readFileSync("test.txt");
let data2 = fs.readFileSync("test2.txt");

console.log(`Data in test.txt: ${data1.toString()}`);
console.log(`Data in test2.txt: ${data2.toString()}`);