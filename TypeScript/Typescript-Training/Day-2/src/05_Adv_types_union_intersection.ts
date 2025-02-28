//union
let value : string | number;
// console.log(typeof value,value);//Variable 'value' is used before being assigned
value = 10;
console.log(typeof value, value);

value = "this";
console.log(typeof value, value);

function printID(id:string | number){
    console.log(typeof id, id);
}
printID(101)
printID("EC-521")
// printID(true)//error


//intersection type
type emp = {name: string, age: number}
type dev = {department:string, techstack:string[]}
type fullStackDev = emp & dev;

let programmer:fullStackDev = {
    name: "chandan",
    age: 20,
    department: "IT",
    techstack : ["Javascript", "Typescript"]
}
