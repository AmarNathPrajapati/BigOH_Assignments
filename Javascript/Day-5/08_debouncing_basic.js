function debounce(func, delay) {
    let timer;
    return function (args) {
        clearTimeout(timer);  // remove previous time
        timer = setTimeout(() => func(args), delay);  // Delay ke baad function call hoga
    };
}
function debounce2(func, delay) {
    let timer;
    return function (args) {
        clearTimeout(timer);  // remove previous time
        timer = setTimeout(() => func.apply(this,args), delay);  // Delay ke baad function call hoga
    };
}

// Example function
function sayHello(name) {
    console.log("Hello", name);
}

// Debounced version of sayHello
const debouncedHello = debounce(sayHello, 1000);

// Testing
debouncedHello("Rahul");  // Ye turant execute nahi hoga
debouncedHello("Amit");   // Rahul cancel ho jayega, Amit ke liye timer start hoga
debouncedHello("Sumit");  // Amit cancel ho jayega, Sumit ke liye timer start hoga
// Sirf "Hello Sumit" print hoga 1 second ke baad, agar koi aur call na aaye.



//Necessity of this,apply and ...args
const user = {
    name: "Rahul",
    sayHello: debounce(function () {
        console.log("Hello, " + this.name);
    }, 1000)
};

user.sayHello(); // "Hello, undefined" print hoga kyunki `this` kho gaya

const user2 = {
    name: "Amar",
    sayHello: debounce2(function () {
        console.log("Hello, " + this.name);
    }, 1000)
};

user2.sayHello(); // "Hello, Amar" print hoga kyunki `this` kho gaya