//Object Type
let user: { name: string, age: number } = {
    name: "Amar",
    age: 23,
  };
  console.log(user.name); // Amar
  console.log(user.age); // 23

// user.email = "amar@gmail.com"; // Error: Property 'email' does not exist
  

//understanding Any type
let data: any = "Hello";
console.log(typeof data, data);
data = 123; // No error
console.log(typeof data, data);
data = true; // No error
console.log(typeof data, data);

//type alias
type person = {
    name: string,
    age : number,
    isMarried: boolean
}
// console.log("afasd__",person);//'person' only refers to a type, but is being used as a value here
let person1 : person = {
    name: "Amar",
    age: 20,
    isMarried:false
}
console.log("assdfasdf__",typeof person1, person1);

//extending new property
type programmer = person & {
    language: string[]
}
let programmer1: programmer = {
    name:"Chandan",
    age:21,
    isMarried: true,
    language:["JavaScript", "C++"]
}
console.log("asdfsd__adsf__",typeof programmer1, programmer1);


//removing new property
type employee = Omit<person,"isMarried">
let employee1: employee = {
    name: "Rahul",
    age:20
}
console.log("adfasfsadfa___",typeof employee1,employee1);



//in function
type point = {x: number, y:number}
function printPoint(a:point){
    console.log(a.x, a.y);
}
printPoint({x:0, y:0})