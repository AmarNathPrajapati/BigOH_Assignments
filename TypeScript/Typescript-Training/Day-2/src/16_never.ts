//Function that Always Throws an Error
function throwError(message: string): never {
    throw new Error(message);
  }
  
  throwError("Something went wrong!"); //Program crash ho jayega
  
//Function with an Infinite Loop
function infiniteLoop(): never {
    while (true) {
      console.log("This will never stop...");
    }
  }
  