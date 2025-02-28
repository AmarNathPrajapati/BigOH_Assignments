//basic type annotation
let username: string = "Aman";
let age: number = 25;
let isAdmin: boolean = true;

//function type annotation
function add(a: number, b: number): number {
    return a + b;
  }
  
let result: number = add(10, 20); // Correct
// let wrongResult: string = add(10, 20); // error


//object type annotation
let person7: { name: string; age: number; isMarried: boolean } = {
    name: "Ravi",
    age: 30,
    isMarried: false
};

//Array type annotation
let numbers: number[] = [10, 20, 30, 40];
let names: string[] = ["Rahul", "Neha", "Ankit"];
