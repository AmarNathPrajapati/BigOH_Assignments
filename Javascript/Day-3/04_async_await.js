function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

getData().then((data) => console.log(data));

async function fetchData(){
    console.log("1. Fetching Data...");
    let data = await getData()
    console.log(data);
}
fetchData()

//Error handling in async await
async function fetchData2() {
    try {
        console.log("1. Fetching data...");
        let data = await getData();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData2();
