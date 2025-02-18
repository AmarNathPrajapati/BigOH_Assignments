class MyPromise {
    constructor(executor) {
        this.state = 'pending'; // Initial state
        this.value = undefined; // Store result
        this.handlers = []; // Store then/catch handlers

        // Resolve function
        const resolve = (value) => {
            if (this.state !== 'pending'){
                return; // Ignore multiple resolve calls
            } 
            this.state = 'fulfilled';
            this.value = value;
            this.handlers.forEach(handler => handler.onFulfilled(value));
        };

        // Reject function
        const reject = (reason) => {
            if (this.state !== 'pending') return;
            this.state = 'rejected';
            this.value = reason;
            this.handlers.forEach(handler => handler.onRejected(reason));
        };

        try {
            executor(resolve, reject); // Execute the function
        } catch (error) {
            reject(error); // If error occurs, reject it
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const handler = {
                onFulfilled: (value) => {
                    try {
                        //checking onfullfilled provided or not
                        resolve(onFulfilled ? onFulfilled(value) : value);
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: (reason) => {
                    try {
                        reject(onRejected ? onRejected(reason) : reason);
                    } catch (error) {
                        reject(error);
                    }
                }
            };

            if (this.state === 'fulfilled') {
                handler.onFulfilled(this.value);
            } else if (this.state === 'rejected') {
                handler.onRejected(this.value);
            } else {
                this.handlers.push(handler);
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }
    //to create a resolved promise quickly
    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }
    //to create a quick rejected promise.
    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }
}

// Example Usage:
function fetchData(url) {
    return new MyPromise((resolve, reject) => {
        console.log(`Fetching data from ${url}...`);
        
        setTimeout(() => {
            if (url === "https://api.success.com") {
                resolve({ status: 200, data: "API Data Loaded!" });
                resolve({ status: 200, data: "API Data Loaded2!" });
            } else {
                reject("API Request Failed!");
            }
        }, 2000); // 2 sec delay
    });
}

fetchData("https://api.success.com")
    .then(response => {
        console.log(" Success:", response);
        return response.data;
    })
    .then(data => console.log("Processed Data:", data))
    .catch(error => console.log(" Error:", error));

fetchData("https://api.fail.com")
    .then(response => console.log(" Success:", response))
    .catch(error => console.log(" Error:", error));

