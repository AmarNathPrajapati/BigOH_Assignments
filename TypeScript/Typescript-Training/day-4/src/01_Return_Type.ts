//ReturnType
function addNumber(a:number, b:number):number{
    return a+b;
}
type addNumType = ReturnType<typeof addNumber>
let result:addNumType = addNumber(49,15);
console.log(result);


//real life example

function getUserDetails(){
    return {
        id: 101,
        userName:"Amar",
        isAdmin:true
    }
}

type userType = ReturnType<typeof getUserDetails>
let newUser:userType = {
    id: 102,
    userName: "Chandan",
    isAdmin:false
}
