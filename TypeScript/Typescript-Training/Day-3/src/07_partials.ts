type User = {
    name:string,
    age:number,
    isMarried:boolean
}

let u1:User = {
    name:"Amar",
    age:20,
    isMarried :true
}
console.log(u1);
let u2: Partial<User> = {
    name:"Amar",
    age:20,
}
console.log(u2);


//update user details
let user3:User = {
    name:"Chandan",
    age:20,
    isMarried: true
}
function updateUserDetails(newUser:User, updatedDetails:Partial<User>):User{
    return {...newUser,...updatedDetails}
}

let updatedUser = updateUserDetails(user3, {age:23});
console.log(updatedUser);