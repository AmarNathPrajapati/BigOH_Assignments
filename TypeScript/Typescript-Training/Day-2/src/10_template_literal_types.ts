type Greeting = `Hello, ${string}!`;//fix format

let msg1: Greeting = "Hello, Aman!"; 
let msg2: Greeting = "Hello, Rahul!";
// let msg3: Greeting = "Hi, Aman!"; //error

//template literal type with union
type Status1 = "success" | "error" | "loading";
type StatusMessage = `Request is ${Status1}`;//fix format

let msg3: StatusMessage = "Request is success";
let msg4: StatusMessage = "Request is error"; 
let msg5: StatusMessage = "Request is loading";
// let msg6: StatusMessage = "Request is failed"; //err

type APIEndpoints = "users" | "posts" | "comments";
type APIPaths = `/api/${APIEndpoints}`;

let path1: APIPaths = "/api/users"; 
let path2: APIPaths = "/api/posts"; 
let path3: APIPaths = "/api/comments"; 
// let path4: APIPaths = "/api/products";
