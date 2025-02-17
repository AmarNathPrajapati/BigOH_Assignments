console.log("1 Synchronous: Start");

setTimeout(() => {
    console.log("4️ setTimeout: This runs after 2 seconds");
}, 2000);

Promise.resolve().then(() => {
    console.log("3 Promise: Executed first in Microtask Queue");
});

console.log("2️ Synchronous: End");


//another example
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
    setTimeout(() => console.log("Timeout inside Promise"), 0);
});

setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");
