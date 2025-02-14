let y = undefined
//console.log(...y);// Error 
//best practice
console.log(...(y || []));

let x = undefined
// console.log([...x]);
console.log({ ...x });
//equivalent code
console.log(Object.assign({}, undefined));

//Handling Null and Undefined Safely
let obj3 = null;
// let obj4 = { ...obj3 };  //  ERROR: Cannot convert null to object
let safeObj = { ...(obj || {}) };
console.log(safeObj);


// Undefined and Null in Array Destructuring
let arr = [undefined, null, 10];
let [a = "default", b = "default", c] = arr;

console.log(a); // "default" 
console.log(b); // null 
console.log(c); // 10

//Object Destructuring with undefined and null
let obj = { name: undefined, age: null, city: "Delhi" };
let { name = "default", age = "default", city, country = "India" } = obj;

console.log(name);   // "default" (kyunki undefined hai)
console.log(age);    // null
console.log(city);   // "Delhi"
console.log(country); // "India" 

// Undefined and Null with Spread in Arrays
let arr1 = [1, undefined, null, 4];
let arr2 = [...arr1, 5];

console.log(arr2); // [1, undefined, null, 4, 5]

//Undefined and Null with Spread in Objects
let obj1 = { name: "John", age: undefined };
let obj2 = { ...obj1, city: "Delhi" };

console.log(obj2); // { name: 'John', age: undefined, city: 'Delhi' }