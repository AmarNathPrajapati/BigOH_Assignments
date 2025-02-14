//basic Interval
let timeId = setInterval(() => {
    console.log("This runs every 2 seconds");
}, 2000);

setTimeout(()=>{
    clearInterval(timeId)
},10000)
//clearInter
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(`Execution count: ${count}`);
    if (count === 5) clearInterval(intervalId);
}, 1000);
