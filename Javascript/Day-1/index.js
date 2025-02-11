console.log("1. Basics of JavaScript")
// JavaScirpt Basics --- single line comment

/*
    This is multi line comment
*/

// This is a simple JavaScript program

let message = "Hello, JavaScript!";
console.log(message);
//Data Types in JavaScript
console.log("2.Data Types in JavaScript")
console.log("Primitive Data Types")
let str = "JavaScript"; // String
let uniqueId = Symbol("id"); // Symbol
let isReady = true; // Boolean
let bigNumber = 9007199254740991n; // BigInt
let num = 42; // Number
let nothing = null; // Null
let notDefined; // Undefined
console.log(typeof str, str, typeof uniqueId, uniqueId, typeof isReady, isReady, typeof bigNumber, bigNumber, typeof nothing, nothing, typeof notDefined, notDefined)

//understaing symbol in detail
console.log("let's understand symbol in detail")
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); //Symbols are always unique
console.log(sym1, sym2);
let user = {
    name: "Rahul",
    age: 25,
    [Symbol("id")]: 101  // Symbol as a key
};

console.log(user); 
console.log(user[Symbol("id")]); // undefined 

//Number Vs BigInt
console.log("Number Vs BigInt")
let maxSafeNumber = 9007199254740991; // Max safe number
let bigNum = 9007199254740991n; // BigInt version

console.log(maxSafeNumber + 1); // 9007199254740992 (may be inaccurate)
console.log(bigNum + 1n); // 9007199254740992n (accurate)

let big1 = 5000n;
let big2 = 2000n;

console.log(big1 + big2); // 7000n
console.log(big1 * 2n);   // 10000n

// console.log(big1 + 2); // Error: Cannot mix BigInt and Number
//let num = 10.5n; // SyntaxError: Decimal literals are not allowed in BigInt

console.log("Reference Data types")
let arr = [1, 2, 3]; // Array
let person = { name: "Tony", age: 25 }; // Object
console.log(typeof arr, arr);
console.log(typeof person, person);
console.log(Array.isArray(arr));   // true 
console.log(Array.isArray(person));   // false

console.log("3. Undefined Vs Null")
let a; // Undefined
let b = null; // Null
console.log(a, b); // Output: undefined null
console.log(typeof a, a, typeof b, b); // Output: undefined object

//how to check verify null
let value = null;
console.log(value === null); //true (Best way to check null)
console.log(value == null);  //true (Loose equality works too)
console.log(typeof value === "object"); //true Misleading (but true)

console.log("4. Variable Declaration: let, var, const")
// var (function scope)
var x = 10;
if (true) {
    var x = 20;
}
console.log(x); // Output: 20

// let (block scope)
let y = 10;
if (true) {
    let y = 20;
    console.log(y); // Output: 20
}
console.log(y); // Output: 10

// const (constant value)
const z = 30;
// z = 40; // Error: Assignment to constant variable

console.log("5. Operators and Expressions")
console.log("5.1. Arithmetic Operators")
console.log(5 + 3); // 8
console.log(5/3);
let ans = 5/3;
console.log(ans.toFixed(4))//decimal upto 4 digit but it return string
console.log(parseFloat(ans.toFixed(4)))//correct way
console.log(10 % 3); // 1 
console.log(2 ** 3); // 8 

console.log("5.2. Assignment Operators")
let id = 5;
id += 3; // a = a + 3
console.log(id); // 8

console.log("5.3. Comparison Operators")
console.log(5 == "5"); // true (due to type conversion )
console.log(5 === "5"); // false (doesn't perform type conversion)

console.log("5.4. Logical Operators")
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

console.log(typeof NaN)//??

//nullish and ternary...