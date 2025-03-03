type Car = {
    name: string,
    weight : number
}
let myCar = {
    name:"BMW",
    weight: 2000,
    // speed: 40
}satisfies Car;

console.log(myCar.name);
console.log(myCar.weight);
// console.log(myCar.speed);

//satisfies with Enum
enum Role{
    Admin  =  "ADMIN",
    User   =  "USER"
}
const roleName = "Admin" satisfies keyof typeof Role
console.log(roleName);

