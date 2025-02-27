//Premitive Data type
let username:string = "Amar Nath";
let userId:symbol = Symbol("EC-521");
let isMarrid:boolean = false;
let mobileNo:bigint = 9140572251n;
let age:number = 23;
let currentAddress:null = null;
let salary:undefined = undefined;
let b = 100;
// b = "ram";//typescript decide b type using typescript inference.
console.log("asdfasfasdf___asfd",typeof b, b);

console.log(`typeof value\n${typeof username} ${username}\n${typeof userId} ${userId.toString()}\n${typeof isMarrid} ${isMarrid}\n${typeof mobileNo} ${mobileNo}\n${typeof age} ${age}\n${typeof currentAddress} ${currentAddress}\n${typeof salary} ${salary} `);
 
//Reference Type
let person : {name: string, age:number} = {
    name : "Amar",
    age : 5
}
console.log(person);

//Array
let marks:number[] = [2,3,4,2,2,4]
console.log(marks);

let fruits:string[] = ["mango","apple","banana","orange"];
console.log(fruits);

//tuple
let mix:[string, number, boolean] = ["Name", 5, true]
console.log(mix);