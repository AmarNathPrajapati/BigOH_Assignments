let str1: string = "Hello Bhai!";
console.log(typeof str1); // "string"


let str2: String = new String("Hello Bhai!");
console.log(typeof str2); // "object"


let str3:string  = "Hello"
console.log(typeof str3);

let str4:String = "Hello";
console.log(typeof str4);





//special use case for String

// Third-Party API Response Validation
function processAPIResponse(data: any) {
    if (data instanceof String) {
      console.log("API returned a String Object");
    } else if (typeof data === "string") {
      console.log("API returned a primitive string");
    }
  }
  
  let response1: string = "Hello";
  let response2: String = new String("Hello");
  
  processAPIResponse(response1); 
  processAPIResponse(response2); 
  
// //CUSTOM UTILITY
// String.prototype.reverse = function () {
//   return this.split("").reverse().join("");
// };

// let str: string = "hello";
// console.log(str.reverse()); // "olleh"


function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

  


