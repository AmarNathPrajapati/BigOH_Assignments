type PersonTuple = [string, number, boolean];

let person2: PersonTuple = ["Amar", 25, true];

console.log(person2[0]); 
console.log(person2[1]); 
console.log(person2[2]); 


console.log("Original Tuple:", person2); // ["Amar", 25, true]

// indexOf() - Find index of an element
console.log("Index of 25:", person2.indexOf(25)); // 1

// includes() - Check if an element exists
console.log("Includes 'Amar':", person2.includes("Amar")); // true
console.log("Includes 30:", person2.includes(30)); // false

// join() - Convert tuple to string
console.log("Joined String:", person2.join(" - ")); // "Amar - 25 - true"

// slice() - Extract a part of tuple
console.log("Sliced Tuple (0 to 2):", person2.slice(0, 2)); // ["Amar", 25]

// concat() - Merge two tuples
let moreperson2: [string, string] = ["Developer", "India"];
console.log("Merged Tuple:", person2.concat(moreperson2)); // ["Amar", 25, true, "Developer", "India"]

// reverse() - Reverse the tuple
console.log("Reversed Tuple:", [...person2].reverse()); // [true, 25, "Amar"]

// splice() - Remove and replace elements
let splicedperson2 = [...person2];
splicedperson2.splice(1, 1, 30);
console.log("After splice (Replace 25 with 30):", splicedperson2); // ["Amar", 30, true]

// find() - Find first matching element
console.log("First number found:", person2.find(item => typeof item === "number")); // 25

// findIndex() - Get index of first match
console.log("Index of first boolean:", person2.findIndex(item => typeof item === "boolean")); // 2

// some() - Check if any element matches condition
console.log("Tuple has a number:", person2.some(item => typeof item === "number")); // true

// every() - Check if all elements match condition
console.log("All elements are strings:", person2.every(item => typeof item === "string")); // false

