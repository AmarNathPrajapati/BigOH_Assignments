class Animal{
    private name:string;
    private age:number;
    constructor(n:string,a:number){
        this.name = n;
        this.age = a;
    }
    getInfo():string{
        return  `Name: ${this.name}, Age: ${this.age}`
    }
}
class Dog extends Animal{
    constructor(name:string,age:number){
        super(name, age)
    }
    bark():void{
        console.log("Dog is barking");
    }
}

class Cat extends Animal{
    constructor(name:string, age:number){
       super(name,age);
    }
    mew():void{
       console.log("Cat is mewing");
    }
}

let dog1 = new Dog("Sheru", 5);
console.log(dog1.getInfo());

let cat1 = new Cat("billu", 6);
console.log(cat1.getInfo());


function filterDogs(animals:Animal[]){
    let newArr = animals.filter((val)=>(val instanceof Dog))
    return newArr;
}

console.log(filterDogs([new Dog("a",4), new Cat("b",3), new Dog("c",7)]));