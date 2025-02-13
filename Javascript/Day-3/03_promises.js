//creating a promise
let myPromise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Promise Completed")
    }else{
        reject("Promise rejected")
    }
})
//handling the promise
myPromise.then((message)=>{
    console.log("Success: ",message);
}).catch((err)=>{
    console.log("Reject: ",err);
}).finally(()=>{
    console.log("I'll execute definitely");
})

//promise chaining
function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 1 Done");
            resolve();
        },1000)
    })
}

function step2(){
    return new Promise((resolve)=>{
        console.log("Step 2 Done");
        resolve();
    })
}
function step3(){
    return new Promise((resolve)=>{
        console.log("Step 3 Done");
        resolve();
    })
}
step1().then(step2).then(step3).then(()=>{
    console.log("All steps completed");
})

//Promise.all()
let p1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 "), 1000));
let p2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 "), 2000));
let p3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 "), 3000));

Promise.all([p1, p2, p3]).then((results) => {
    console.log("All tasks done:", results);
});
// Output: After 3 seconds => ["Task 1 ", "Task 2 ", "Task 3 "]
Promise.race([p1, p2, p3]).then((result) => {
    console.log("Fastest task completed:", result);
});
// Output: "Task 3" (Because it completes in 1 second)
let np1 = new Promise((resolve,reject) => setTimeout(() => reject("Task 1 "), 1000));
let np2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 "), 2000));
let np3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 "), 3000));
Promise.any([np1, np2, np3]).then((result) => {
    console.log("First successful task:", result);
});
// Output: "Task 2" (Because Task 1 failed)

