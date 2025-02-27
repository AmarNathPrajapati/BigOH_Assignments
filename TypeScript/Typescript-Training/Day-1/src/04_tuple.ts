"use strict";
let info: [string, number, boolean] = ["Amar", 25, true];
console.log("Original Tuple:", info); // ["Amar", 25, true]

// indexOf() - Find index of an element
console.log("Index of 25:", info.indexOf(25)); // 1

// includes() - Check if an element exists
console.log("Includes 'Amar':", info.includes("Amar")); // true
console.log("Includes 30:", info.includes(30)); // false

// join() - Convert tuple to string
console.log("Joined String:", info.join(" - ")); // "Amar - 25 - true"

// slice() - Extract a part of tuple
console.log("Sliced Tuple (0 to 2):", info.slice(0, 2)); // ["Amar", 25]

// concat() - Merge two tuples
let moreInfo: [string, string] = ["Developer", "India"];
console.log("Merged Tuple:", info.concat(moreInfo)); // ["Amar", 25, true, "Developer", "India"]

// reverse() - Reverse the tuple
console.log("Reversed Tuple:", [...info].reverse()); // [true, 25, "Amar"]

// splice() - Remove and replace elements
let splicedInfo = [...info];
splicedInfo.splice(1, 1, 30);
console.log("After splice (Replace 25 with 30):", splicedInfo); // ["Amar", 30, true]

// find() - Find first matching element
console.log("First number found:", info.find(item => typeof item === "number")); // 25

// findIndex() - Get index of first match
console.log("Index of first boolean:", info.findIndex(item => typeof item === "boolean")); // 2

// some() - Check if any element matches condition
console.log("Tuple has a number:", info.some(item => typeof item === "number")); // true

// every() - Check if all elements match condition
console.log("All elements are strings:", info.every(item => typeof item === "string")); // false

