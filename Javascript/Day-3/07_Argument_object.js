//The Argument Object
function showArgs() {
    console.log(arguments);
  }
  
  showArgs(10, 20, 30, 40);

//Accessing Element of Argument Object
  function printValues() {
    console.log(arguments[0]); // First argument
    console.log(arguments[1]); // Second argument
  }
  
  printValues("Amar", "Nath");

  //Argument object type
  function checkType() {
    console.log(Array.isArray(arguments));
    console.log(typeof arguments);
  }
  
  checkType(1, 2, 3);
  
  //Converting arguments to an Array
  function convertToArray() {
    let argsArray = Array.from(arguments);
    console.log(typeof argsArray);
    console.log(argsArray);
  }
  
  convertToArray(10, 20, 30, 40);
  
  //arguments in Arrow Functions (Not Available)
  const arrowFunc = () => {
    // console.log(arguments); //  Error: arguments is not defined
  };
  
  arrowFunc(10, 20);
  

//Finding Sum of All Arguments
  function sum() {
    let total = 0;
    
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
  
    return total;
  }
  
  console.log(sum(10, 20, 30, 40)); // 100

//Using Rest Parameter (...args) Instead of arguments
const sum1 = (...args) => {
    console.log(typeof args);
    return args.reduce((acc, num) => acc + num, 0);
  };
  
  console.log(sum1(10, 20, 30, 40)); // 100
  