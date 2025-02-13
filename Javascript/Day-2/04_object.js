// "use strict";

console.log("Let's Understand the Object in deep");
console.log("3.a Crating an object using object literal and object Constructor");
//Object Creation using object literals

const person = {
    name: "Amar",
    age: 25,
    city: "Delhi"
};
console.log(person);
//Object Creation using new Object Constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Fortuner";
car.year = 2023;
console.log(car);

console.log("3.b Accessing the object properties");
//by dot nonation
console.log(person.name);  // Output: Amar
console.log(car.model);    // Output: Fortuner
//object[property]
const student = {
    "first name": "Vikas",
    age: 22
};
console.log(student["first name"]);  // Output: Vikas


console.log("3.c Modifying the property of object");
person.age = 30;
console.log(person);

console.log("3.d Adding and deleting properties");
//adding new propery
person.gender = "Male"//adding gender property
console.log(person);
//deleting the property
delete person.city;
console.log(person);

console.log("3.e Nested Object");
const company = {
    name: "Google",
    location: "California",
    employees: {
        total: 100000,
        departments: ["Engineering", "Marketing", "Sales"]
    }
};
console.log(company.employees.total);  // Output: 100000
console.log(company.employees.departments[0]);  // Output: Engineering

console.log("3.f Object Method (MDN Reference)");
console.log(Object.keys(person));  // Output: ["name", "age", "gender"]
console.log(Object.values(person));  // Output: ["Amar", 30, "Male"]


console.log(Object.entries(person));
// Output: [["name", "Rahul"], ["age", 30], ["gender", "Male"]]


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = Object.assign(obj1, obj2);
console.log(merged);  // Output: { a: 1, b: 2, c: 3, d: 4 }


const user = { name: "Amar" };
Object.freeze(user);
// user.name = "Ravi"; // Modification not allowed
console.log(user.name);  // Output: Amar

const user2 = { name: "Sohan" }; 
Object.seal(user2);
user2.name = "Ram";  // Allowed
delete user2.name;    //Not Allowed
console.log(user2.name);  // Output: Ravi



const user3 = { name: "Amar", age: 25 };
Object.freeze(user3);

user.name = "Rama";  // Error



