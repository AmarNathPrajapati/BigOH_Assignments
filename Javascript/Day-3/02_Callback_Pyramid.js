console.log("let's understand synchronous and asynchronous programming");
//synchronous code
console.log("Synchronous Programming");
console.log("1.start");
function syncTask(){
    console.log("2.Synchronous task done");
}
syncTask();
console.log("3.End");

//asynchronous programming
console.log("Asynchronous Programming");    
console.log("1.start");
function asyncTask(){
    setTimeout(()=>{
        console.log("2.Asynchronous Task Done");
    },2000)
}
asyncTask();
console.log("3.end");

//callback Hell
console.log("Let's understand Callback Hell");

function step1(callback){
    setTimeout(()=>{
        console.log("Step 1 Done");
        callback();
    },1000)
}

function step2(callback){
        console.log("Step 2 Done");
        callback();
    
}
function step3(callback){
        console.log("Step 3 Done");
        callback();
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All steps completed");//pyramid of Doom
        })
    })
})