console.log("1. Conditional Statements");
//if-else-if
let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

//ternary operator 
let n = 10;
(n%2===0)?console.log("Even Number"):console.log("Odd Number");

//switch case
let day = "Monday"
switch (day){
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    case "Sunday":
        console.log("Weekend... Maje karo!");
        break;
    default:
        console.log("Normal Day");
}

//Nullish Operator
let uname;
let userName= uname ?? "user"; //handling undefined value
console.log(userName);

let value = null;
let defaultValue = value??0;
console.log(defaultValue);

// ?? vs ||
let num1 = 0;
let result1 = num1 || 10;  
let result2 = num1 ?? 10;  

console.log(result1);  // Output: 10
console.log(result2);  // Output: 0

//2. Logical operators and their use in conditionals.
console.log("2. Logical operators and their use in conditionals.");
let x = 10, y = 5;

if (x > 5 && y < 10) {
    console.log("Both conditions are true!");
}

if (x > 15 || y < 10) {
    console.log("At least one condition is true!");
}

console.log(!true);  // Output: false

console.log("3. loops in JavaScript");
//for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}
// for of loop
let fruits = ["Apple", "Banana", "Mango"]
for (let fruit of fruits){
    console.log(fruit);
}

let myName = "AmarNath";
for (let letter of myName){
    console.log(letter);
}
// let num = 131323;
// for (let digit of num){ ----------> Not iterable data type
//     console.log(digit);
// }


//for-in loop
let personObj ={
    name:"Amit",
    age:25,
    laguage:"javaScript"
}

for (let key in personObj){
    console.log(key +" " +personObj[key]);
}

//while loop
let count = 1;

while (count <= 5) {
  console.log(`Count: ${count}`);
  count++;
}

//function in JS
console.log("Functions in JavaScript");

//function with parameters
function greet(name){
    console.log("Hello, "+ name+ "!");
}
greet("Amar")

//functions with return value
function addValue(a,b){
    return a + b;
}
let result3 = addValue(3,4);
console.log(result3);

//Arrow functions
const multiply = (a,b) => a*b;
let result4 = multiply(3,4)
console.log(result4);

const fun1 = (c,d) =>{
    return c/d;
}
let result5 = fun1(5,6)
console.log(parseFloat(result5.toFixed(2)));