try {
    let a = 10;
    let b = a / 0;  // No error, but gives Infinity
    console.log(b);
    
    let c = unknownVariable;  // Error: ReferenceError
} catch (error) {
    console.log("Error caught:", error.message);
}

//with finally block
try {
    console.log("Trying to execute...");
    let result = 10 / 2;
    console.log("Result:", result);
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("Finally block executed!");
}

//didn't catch error of asynchronous code
// try {
//     setTimeout(() => {
//         throw new Error("Asynchronous Error");
//     }, 1000);
// } catch (error) {
//     console.log("Error Caught:", error.message);
// }

//right way: using async await
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchData();

