// Write a function that takes two numbers as parameters and returns their sum. Ensure the parameters and return type are typed.
// Example prompt: "Use TypeScript to enforce that the inputs are numbers."
function addNumber(a:number, b:number):number{
    return a + b;
}
console.log(addNumber(2,3));
// console.log(addNumber("2","3"));//error


// Create an interface for a User object with properties name (string), age (number), and an optional email (string). Then, write a function that accepts a User and logs their details.
// Focus: Interfaces and optional properties.
interface User6{
    name:string,
    age:number,
    email?:string
}
function printUserDetails(u:User6):void{
    console.log(`Name of user is ${u.name}, age of user is ${u.age}, ${u.email ? ", email of user is " + u.email : ""}`);
}
let u:User6 = {
    name:"Amar",
    age: 23,
    email:"amar@gmail.com"
}
printUserDetails(u)
// Write a function that takes an array of strings and returns a new array with all strings converted to uppercase. Type the input and output.
// Hint: Use array methods like map.
function convertToUpperCase(arr:string[]):string[]{
    let newArr = arr.map(item => item.toUpperCase())
    return newArr;
}
let arr:string[] = ["Amar", "Nath", "Prajapati"]
console.log(convertToUpperCase(arr));
 
// Implement a generic function called getFirstElement that takes an array of any type and returns the first element of that array.
// Focus: Generics in TypeScript.
function getFirstElement<T>(arr:T[]):T{
    return arr[0];
}
console.log(getFirstElement([1,2,3]));
console.log(getFirstElement(["Amar","Nath","Prajapati"]));

 
// Write a function that takes a string or number and returns a string description (e.g., "This is a string" or "This is a number"). Use union types.
// Focus: Type narrowing with typeof.
function takeStringNum(a:string | number):string{
    return typeof a === "number"?"This is a number":"This is a string";
}
console.log(takeStringNum(5));
console.log(takeStringNum("Amar"));
