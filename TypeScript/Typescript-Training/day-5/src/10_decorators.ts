function Logger(constructor: Function) {
    console.log("Logging the class...");
    console.log(constructor);
}

@Logger  // <- Yeh Class Decorator hai
class Person {
    constructor(public name: string) {
        console.log(`Person ${name} created!`);
    }
}

const p1 = new Person("Amit");
