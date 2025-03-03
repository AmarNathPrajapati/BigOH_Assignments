// 1. Object Types

// Create a TypeScript object type for a Book with properties: title, author, and publishedYear. Use this type to create a book object and print its details.
type Book = {
    title : string,
    author: string,
    publishedYear: number
}
let book:Book = {
    title : "Let's Become Immortal",
    author: "Amar Nath",
    publishedYear: 2005
}
console.log(book);

// Define an object type for a Person with properties: name (string) and age (number). Write a function that takes a Person object as an argument and returns a greeting message.
type Person = {
    name: string,
    age:number
}
function greet(person:Person){
    return `Hi! ${person.name},Good Morning, I think you are ${person.age} years old`
}
let p1:Person = {
    name : "Chandan",
    age : 22
}
console.log(greet(p1));
// Extend the Person type to include an optional email property. Create a function that prints all properties of a Person, including email if available.
type PersonWithEmail = Person & {
    email?:string
}
function printDetails(person:PersonWithEmail){
    console.log(`Hi! ${person.name},Good Morning, I think you are ${person.age} years old`);
    (person.email)?(console.log(person.email)):(console.log("you don't have email"))
}
let p2:PersonWithEmail = {
    name : "Chandan",
    age : 22
}
printDetails(p2)
let p3:PersonWithEmail = {
    name : "Chandan",
    age : 22,
    email:"chandan@gmail.com"
}
printDetails(p3)
// Create a Car object type with properties brand, model, and year. Ensure year is readonly, and modify the brand property after object creation.
type Car = {
    brand: string,
    model : string,
    readonly year: number
}
let myCar:Car = {
    brand: "BMW",
    model: "EC-101",
    year :2002
}
myCar.brand = "EC-1051"
console.log(myCar);