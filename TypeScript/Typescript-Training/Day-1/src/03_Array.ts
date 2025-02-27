//way of declaration
let persons: Array<string> = ["Ram", "Shyam", "Mohan"]
console.log(persons);

let numbers: number[] = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);

//push() - Add element at the end
numbers.push(60);
console.log("After push(60):", numbers); //[10, 20, 30, 40, 50, 60]

//pop() - Remove last element
numbers.pop();
console.log("After pop():", numbers);// [10, 20, 30, 40, 50]

//unshift() - Add element at the start
numbers.unshift(5);
console.log("After unshift(5):", numbers);// [5, 10, 20, 30, 40, 50]

//shift() - Remove first element
numbers.shift();
console.log("After shift():", numbers);// [10, 20, 30, 40, 50]

//map() - Modify each element
let squaredNumbers = numbers.map(num => num * num);
console.log("After map (square each number):", squaredNumbers);// [100, 400, 900, 1600, 2500]

//filter() - Keep numbers greater than 25
let filteredNumbers = numbers.filter(num => num > 25);
console.log("After filter (num > 25):", filteredNumbers);// [30, 40, 50]

//reduce() - Sum of all numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum using reduce():", sum);//150

//forEach() - Print each element
console.log("Using forEach:");
numbers.forEach(num => console.log(num));

//indexOf() - Find index of an element

let index = numbers.indexOf(30);
console.log("Index of 30:", index); //2

//includes() - Check if an element exists
console.log("Includes 20:", numbers.includes(20));
console.log("Includes 100:", numbers.includes(100));

// sort() - Sort in ascending order
let sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted Array:", sortedNumbers);//[10, 20, 30, 40, 50]

// reverse() - Reverse the array
console.log("Reversed Array:", [...numbers].reverse()); // [50, 40, 30, 20, 10]

// concat() - Merge two arrays
let moreNumbers:number[] = [60, 70, 80];
console.log("Merged Array:", numbers.concat(moreNumbers)); // [10, 20, 30, 40, 50, 60, 70, 80]

// join() - Convert array to string
console.log("Joined String:", numbers.join(" - ")); // "10 - 20 - 30 - 40 - 50"

// slice() - Extract a part of array
console.log("Sliced Array (1 to 4):", numbers.slice(1, 4)); // [20, 30, 40]

// splice() - Remove and replace elements
let splicedArray = [...numbers];
splicedArray.splice(2, 1, 99);
console.log("After splice (Replace 30 with 99):", splicedArray); // [10, 20, 99, 40, 50]

// find() - Find first matching element
console.log("First number > 25:", numbers.find(num => num > 25)); // 30

// findIndex() - Get index of first match
console.log("Index of first number > 25:", numbers.findIndex(num => num > 25)); // 2

// some() - Check if any element matches condition
console.log("Some number > 45 exists:", numbers.some(num => num > 45)); // true

// every() - Check if all elements match condition
console.log("All numbers are positive:", numbers.every(num => num > 0)); // true
