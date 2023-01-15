
let items = ["hello", "welcome", "bye", "doo", "baa"];

items.forEach((item, index) => {
    console.log(`Item: ${item} at position ${index} `)
});
// adding new elements to the array
items.push("foo")
console.log(items);
// to remove items from position 0
items.splice(0, 2);
console.log(items);

let counter = 1;
do {
    console.log(`Counter: ${counter}`)
    counter++;
} while(counter != 5);

