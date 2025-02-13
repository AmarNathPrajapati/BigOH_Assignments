console.log("Let's Understand the Array in Deep");
//creation of Array...
console.log("2.a Creation of Array");
// Method 1: Using square brackets []
let numbers = [10, 20, 30, 40];

// Method 2: Using new Array()
let fruits = new Array("Apple", "Mango", "Banana");

// Method 3: Empty array
let emptyArr = [];

console.log(numbers);  // [10, 20, 30, 40]
console.log(fruits);   // ["Apple", "Mango", "Banana"]
console.log(emptyArr); // []

console.log("2.b Accessing the element of Array");
//accessing the element of the array
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // "Red"
console.log(colors[1]); // "Green"
console.log(colors[2]); // "Blue"
console.log(colors[3]); // undefined (doesn't exist)
console.log(colors.at(-1)); // "Blue" (last element)
console.log(colors.at(-2)); // "Green"

console.log("2.c Understanding Common Array methods");
//push method
let arr = [1,2,3]
arr.push(4)
console.log(arr);
//pop method
arr.pop();
console.log(arr);
//unshift method
arr.unshift("Number")
console.log(arr);
//shitt method
arr.shift();
console.log(arr);
//splice methods
arr.splice(1,2,10,20,30)
console.log(arr);
//slice method
let newSliceArray = arr.slice(1,4)
console.log("newSliceArray: ",newSliceArray);
//slicing with negative Index
let slicedArr = arr.slice(-3, -1);
console.log(slicedArr); 




console.log("2.d Understanding the various Array Property");

let cities = ["Delhi", "Mumbai", "Kolkata"];
console.log(cities.length); // 3

console.log(cities.indexOf("Mumbai")); // 1
console.log(cities.indexOf("Chennai")); // -1 (doesn't exit)

console.log(cities.includes("Delhi")); // true
console.log(cities.includes("Chennai")); // false

let arrpro = ["apple", "banana", "mango", "banana"];
console.log(arrpro.lastIndexOf("banana")); // Output: 3

console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray("Hello")); // Output: false

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

let arr3 = [1, 2, 3, 4];
arr3.reverse();
console.log(arr3); // Output: [4, 3, 2, 1]


let fruits1 = ["banana", "apple", "mango"];
fruits1.sort();
console.log(fruits1); // Output: ["apple", "banana", "mango"]

let numbers1 = [40, 5, 100, 1, 25];
// numbers1.sort()//doesn't work
numbers1.sort((a, b) => a - b);//ascending order
numbers1.sort((a, b) => b - a);//descending order
console.log(numbers1); // Output: [1, 5, 25, 40, 100]

let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArr.flat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log(nestedArr.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

let arrJoin = ["Hello", "World", 1,2,3,[[1,2]]];
console.log(arrJoin.join(" ")); // Output: "Hello World"

let numbers2 = [5, 12, 8, 130, 44];
let found = numbers2.find(num => num > 10);
console.log(found); // Output: 12

let arr4 = new Array(5).fill(4);
console.log(arr4); // Output: [4,4,4,4,4]

let arr5 = [1, 2, 3, 4, 5, 6];
arr5.fill(9, 2, 5); 
console.log(arr5);  // Output: [1, 2, 9, 9, 9, 6]

console.log(("2.e Array Iteration methods"));
//for-loop
let numbers4 = [10, 20, 30];
for (let i = 0; i < numbers4.length; i++) {
    console.log(numbers4[i]);
}

//forEach loop
let numbers5 = [5, 10, 15];
numbers5.forEach((num, index, arr) => {
  console.log(`Index: ${index}, Value: ${num}, Array: [${arr}]`);
});

//forEach with Arrow function
let fruits2 = ["Apple", "Banana", "Mango"];
fruits2.forEach(fruit => console.log(fruit));

//forEach' Return value
let result = [1, 2, 3].forEach(num => num * 2);
console.log(result);  // Output: undefined

//forEach doesn't support break and continue??
let numbers6 = [10, 20, 30, 40];
numbers6.forEach(num => {
  if (num === 30){
    // break;  //error
  console.log(num)                                                                                                                                                                                                                                                                                                                                          
  } 
});
 

console.log("1.f Understanding the advanced Array methods");
//filter method with array
let nums = [10, 25, 30, 45, 50];
//filetering the value greater than 30
let filteredNums = nums.filter(num => num > 30);
console.log(filteredNums); // [45, 50]

//map method
let numbers7 = [1, 2, 3, 4];
//creating a newArray of squares
let squaredNumbers = numbers7.map(num => num * num);
console.log(squaredNumbers);

//reduce method
let numbers8 = [10, 20, 30, 40];
let sum = numbers.reduce((acc, num) => acc + num, 100);
console.log(sum);
