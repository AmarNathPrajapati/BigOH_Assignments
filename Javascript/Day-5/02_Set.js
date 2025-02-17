//creating a Set without initializing the value
const mySet = new Set(); // Empty Set
console.log("adfdasdfasdfas",mySet);

// directly initializing the value
let obj = {
    "name":"abc"
};
let newArr2 = new Array();
const numbers = new Set([1,obj,obj,newArr2,newArr2, [] ,3, 4, 4, 2, 5]);
console.log("asdfsdfasdf__",numbers); // Output: Set(5) {1, 2, 3, 4, 5} (duplicates removed)

//performaing various set operations
const fruits = new Set();
fruits.add("Apple");
fruits.add("Mango");
fruits.add("Banana");
fruits.add("Apple"); // Duplicate will be ignored

console.log("asdfasdfas__af",fruits); // Output: Set(3) { 'Apple', 'Mango', 'Banana' }

console.log(fruits.has("Mango")); // true
console.log(fruits.has("Grapes")); // false

fruits.delete("Banana");
console.log("asfdasf__asdf",fruits); // Output: Set(2) { 'Apple', 'Mango' }

console.log("adsfafs__asdf",fruits.size); // 2

fruits.clear();
console.log("adffd__fadsfs",fruits); // Output: Set(0) {}

//iterating over a set
let numberSet = new Set([10,20,30])
//using forEach loop
numberSet.forEach((val)=>{
    console.log("forEach: ",val);
})
//using the for of loop
for(let val of numberSet){
    console.log("for of: ",val);
}
//using spread operator
let newArr = [...numberSet]
console.log("newArr: ",newArr);

//use case of Set
// Duplicate Removal from Array
const arr = [1, 2, 3, 2, 4, 3, 5, 6, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]

//Effcient lookup
const idSet = new Set(["A101", "B202", "C303"]);
console.log(idSet.has("B202")); // true (Faster than array.includes())
