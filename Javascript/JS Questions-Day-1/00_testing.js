let multiply = new Function("num", "return num * 10;");
console.log(multiply(5)); // Output: 50

const params = new URLSearchParams({
    name: "Tony Stark",
    age: 45,
    hero: "Iron Man",
  });
  
  console.log(params.toString()); 
  // Output: "name=Tony%20Stark&age=45&hero=Iron%20Man"
  
const queryString = "name=Steve+Rogers&age=100&hero=Captain+America";
const params2 = new URLSearchParams(queryString);

console.log(params2.get("name")); // "Steve Rogers"
console.log(params2.get("age"));  // "100"
console.log(params2.get("hero")); // "Captain America"

const params3 = new URLSearchParams();
params3.append("name", "Bruce Wayne");
params3.append("age", "40");
console.log(params3.toString()); 
// Output: "name=Bruce+Wayne&age=40"
params3.set("age", "41"); // 'age' ko 41 se replace karega
console.log(params3.toString()); 
// Output: "name=Bruce+Wayne&age=41"
params3.delete("age");
console.log(params3.toString()); 
// Output: "name=Bruce+Wayne"


