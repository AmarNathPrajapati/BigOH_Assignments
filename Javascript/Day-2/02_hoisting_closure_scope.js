// console.log("1.a Understing the concept of Hoisting in detail");
// //Hoisting of Var
// console.log(a);
// var a = 10;
// console.log(a);
// //Hoisting of let and const
// // console.log(b);//temporal dead zone
// // console.log(c);//can't access before intialization
// let b = 10;
// const c = 20;
// console.log(b);
// console.log(c);
// //Hoisting of function 
// greet()
// function greet(){
//     console.log("Hi buddy");
// }

// //Hoisting with arrow functions

// // console.log(myFunc()); // ReferenceError

// // const myFunc = function () {
// //   return "Hello, World!";
// // };

// console.log("1.b Understanding the concept of closures");
// function outerFunction(){
//     let count = 0;
//     return function innerFunction(){
//         count ++;
//         console.log("count: "+count);
//     }
// }

// let counter = outerFunction();//closure
// counter();
// counter();
// counter();

// //closure with arrow function
// const outerFunction2 = () =>{
//     let count = 0;
//     return () =>{
//         count++;
//         console.log("Arrow Counter: "+count);
//     }  
// }
// let arrowCounter = outerFunction2()
// arrowCounter();
// arrowCounter();
// arrowCounter();

// console.log("1.c Understanding Scope: Global, Local aur Block");
// //global scope
// let cname = "Rahul";// here nmae act as global variable

// function cgreet() {
//   console.log("Hello, " + cname);
// }

// cgreet(); //Hello, Rahul

// //local scope
// function myFunction() {
//     var lvar = "I am var variable"
//     let localVar = "I am local";
//     console.log(localVar);
//   }
  
//   myFunction(); // ✅ Output: I am local
// //   console.log(lvar);
// //   console.log(localVar); //ReferenceError

// //block scope
// {
//     let x = 10;
//     const y = 20;
//     console.log(x, y); // ✅ Output: 10 20
//   }
  
// //   console.log(x, y);

// //checking with var
// {
//     var ab = 10;
// }
// console.log(ab);
  
// console.log("1.d Understanding the concept of callback function");

// function highOrderfunc(name ,callback){
//     console.log(name);
//     callback();
// }

// function praise(){
//     console.log("You are great!");
// }

// highOrderfunc("Varun", praise);

// console.log("1.e Understanding pass by value and pass by reference");
// //pass by value
// let passByValue = 10;

// function modifyValue(x) {
//   x = 20;
// }

// modifyValue(passByValue);
// console.log(passByValue); // Output: 10

// //pass by reference
// let obj = { name: "Amar" };

// function modifyObject(o) {
//   o.name = "Amit";
// }

// modifyObject(obj);
// console.log(obj.name); //Output: Amit



//GEC both phase execution DRY Run
// console.log(y); // ReferenceError (TDZ) ---------> Memory allocated, but not initialized --> TDZ Start ho gaya
// let y = 20; //TDZ end, y initialize hota hai
// console.log(y); //20



//GEC start
greet();//function declaration hoist
console.log(a);//in TDZ
console.log(b);//undefined
let a;//declaration
a = 10//initialization
var b = 20;//initialization
console.log(a);
console.log(b);

function greet(){
  console.log("Good Evening")
}

