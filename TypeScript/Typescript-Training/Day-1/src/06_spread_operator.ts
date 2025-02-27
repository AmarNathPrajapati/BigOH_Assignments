//Array
const nums = [1, 2, 3];
const newNums = [0, ...nums, 4];

console.log(newNums); // [0, 1, 2, 3, 4]

//Object
const user = { name: "Amar", age: 23 };
const newUser = { ...user };

console.log(newUser); // { name: 'Amar', age: 23 }

//updating details
const user2 = { name: "Amar", age: 23 };
const updatedUser = { ...user2, age: 25 }; 

console.log(updatedUser); // { name: 'Amar', age: 25 

//Spreading an undefined Value
const data = undefined;
// const newArray = [...data]; //Error: Spread types may only be created from array-like objects
const newArray = [...(data || [])];//used 
console.log(newArray); // []

//spreading of null value
const data1 = null;
// const newArray1= [...data1]; // Error: Spread types may only be created from array-like objects
const newArray1 = [...(data || [])];

console.log(newArray1); // []


const arr = [1, undefined, 2, null, 3];
const newArr = [...arr];
const newArr2 = arr.filter(item => item!==undefined  && item!== null)

console.log(newArr); // [1, 2, 3]


console.log(newArr); // [1, undefined, 2, null, 3]


