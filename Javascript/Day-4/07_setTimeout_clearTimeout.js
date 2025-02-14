//basic usage
console.log("Start");

setTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);

console.log("End");

//setTimeout with Parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "Rahul");
//Stopping setTimeout using clearTimeout()
let timeoutId = setTimeout(() => {
    console.log("This will not run");
}, 5000);

console.log("adfasasdf__timeoutID",timeoutId);
clearTimeout(timeoutId);  // setTimeout ko cancel kar diya
