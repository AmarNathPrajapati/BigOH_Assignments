//Without NonNullable
type UserName = string | null | undefined;

let user7: UserName = "Ravi"; 
let user8: UserName = null; 
let user9: UserName = undefined; 

//With NonNullable
type StrictUserName = NonNullable<UserName>;

let user10: StrictUserName = "Pooja"; // Valid
// let user8: StrictUserName = null; ERROR: null not allowed
// let user9: StrictUserName = undefined; ERROR: undefined not allowed

// Function With NonNullable
function printMessage(message: NonNullable<string | null | undefined>) {
    console.log(message);
  }
  
  printMessage("Hello!"); // Works Fine
  // printMessage(null); ERROR: null not allowed
  // printMessage(undefined); ERROR: undefined not allowed
  