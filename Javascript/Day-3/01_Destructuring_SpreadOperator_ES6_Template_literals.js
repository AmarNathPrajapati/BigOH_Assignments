console.log("1.a Understanding the concept of Destructuring Assignment");
console.log("1.a.i Array Destructuring");

//Normal way
let arr = [1,2,3];
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a,b,c);

//Array Destructuring
let newArr = [1,2,3]
let [x,y,z] = newArr;
console.log(x,y,z);

//Default Values
const arr1 = [10, 20];
const [a1, b1, c1 = 30] = arr1;
console.log(a1, b1, c); // 10 20 30

//skipping Values
const arr2 = [10, 20, 30, 40, 50, 60, 70];
const [a2, , c2, d2, , ,g2] = arr2; 
console.log(a2, c2,d2, g2); // 10 30

console.log("1.a.ii. Object Destructuring");
//Normal way
const person = {
    name: "Amit",
    age: 25,
    city: "Delhi"
  };
  
  let name = person.name;
  let age = person.age;
  let city = person.city;
  
  console.log(name, age, city); // Amit 25 Delhi

//Destructuring way
const user = {
    userName: "Amit",
    userAge: 25,
    userCity: "Delhi"
  };
  
  const { userName, userAge, userCity } = user;
  
  console.log(userName, userAge, userCity); // Amit 25 Delhi

//Renaming Variables
const person1 = { name: "Amit", age: 25 };

const { name: fullName, age: personAge } = person1;
console.log(fullName, personAge); // Amit 25

// const {name: fullName} = person1;
// console.log(fullName);
 
// const {age: personAge} = person1;
// console.log(personAge);

console.log("1.b Understanding the concept of spread and rest operator");

console.log("1.b.i. Spread Operator");
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

const newArr1 = [...arr3, ...arr4];

console.log(newArr1); // [1, 2, 3, 4, 5, 6]

let str = "AmarNath"
let str2 = "Prajapati"
let strArr = [...str,...str2]
console.log(strArr);

const obj1 = { name: "Amit", age: 25 };
const obj2 = { city: "Delhi", country: "India" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
// { name: "Amit", age: 25, city: "Delhi", country: "India" }

console.log("1.b.ii rest operator");

//rest operator in array
function sum(...nums){
    return nums.reduce((acc,num)=>acc+num,0)
}
let result = sum(10,20,30,40,50,234,234,52345,2345,234)
console.log(result);

//rest operator in object


function checkRest({name:userName, ...restObj}){
    console.log("In checkRest",userName);
    console.log("In checkRest",restObj);
}
const person3 = { name: "Amit", age: 25, city: "Delhi" };
const { name: name3, ...rest } = person;

console.log(name3); // Amit
console.log(rest); // { age: 25, city: "Delhi" }
checkRest(person3)


//Normal function
function greet(){
    console.log("Hellooooooooooooo...");
}
greet()

//arrow function
const greet2=()=>"Helloooooooooooo..."
console.log(greet2());

console.log("1.d Understanding the concept of template literals");
let uname = "Amar"
let uage = "23"
//concating element without using +
console.log("New member of bigOH is "+ uname + ". His Age is "+ uage);

console.log(`New member of bigOH is ${uname}. His Age is ${uage}`);

//
const message = "This is line 1\nThis is line 2\nThis is line 3 ";
console.log(message);


