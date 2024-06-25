const table = ["Klaudia", 2, 5.35, true, {name: "Tomasz", age: 24}]

const numbers = [1,6,4,9,2,4];

// Verfication length of array
console.log(table.length)
console.log(numers.length)

// Adding items to array
table.push("Wojtek");

//Removing items from the end of an array
table.pop();
numbers.pop();
console.log(table)

//Removing elements from the beginning of an array
table.shift();

//Searching elements in an array by value
const indexElement = numbers.indexOf(2)
console.log(indexElement);

//Removing elements from array
numbers.splice(indexElement, 1)

//Change type of array to string
const names = ["Rafał", "Krzyś", "Ola", "Ania"]
const stringNames = names.join("-");
console.log(stringNames)

//Reverse of array
names.reverse();

//Array sorting
names.sort();

//Combining arrays
const oneTable = numbers.concat(names);


