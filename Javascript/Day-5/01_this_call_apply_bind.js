//call method
function greet(role, country) {
    console.log(`Hello ${this.name}, You are ${role} from ${country}`);
}

const user = { name: "Rahul" };

greet.call(user, "Developer", "India");
// Output: Hello Rahul, You are a Developer from India

const newUser = {age: 26,name:"Amar", role:"React Developer", country:"India"}
greet.call(newUser)

//apply method
greet.apply(newUser, ["Engineer", "India"]);
// Output: Hello Rahul, You are an Engineer from USA

//bind method
const boundGreet = greet.bind(user, "Manager", "UK"); 
boundGreet();  
// Output: Hello Rahul, You are a Manager from UK
