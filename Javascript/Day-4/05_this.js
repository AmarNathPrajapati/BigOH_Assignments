console.log("asdfasfa___asdfasdf",this); // {} (Empty object, NOT global)


//this in a Regular Function
function showThis() {
    console.log("adsffafasdf___asdfasdf",this);//global object
}
  
showThis(); // Browser: Window | Node.js: global

// this in object
let obj = {
    name: "Amar",
    greet: function () {
      console.log("adsffafdf_____asfafasfadsf",this.name);//Amar
    },
  };
  
  obj.greet(); // Amar
  
//Call from Different Context
let person1 = { name: "Amar" };
let person2 = { name: "Bob" };

function greet() {
  console.log("asdffasdfasfd__asdfsf",this.name);
}

// Call `greet` in different contexts
greet.call(person1); // Amar
greet.call(person2); // Bob



// this in arrow function
let obj2 = {
    name: "Amar",
    greet: () => {
      console.log("asfasdf__asdsfasfwerrwasdfasdf",this);//{}
      console.log("asfasdf__asdsfasfasdfasdf",this.name);//undefined
    },
  };
  
  obj2.greet(); // undefined (Because `this` is not obj)
  
// this in arrow function which under a function
let obj3 = {
    name: "Amar",
    greet: function () {
      let arrowFunc = () => {
        console.log("asdfafas___asdfertwerfasfasdfdds",this);//Amar
        console.log("asdfafas___asdffasfasdfdds",this.name);//Amar
      };
      arrowFunc();
    },
  };
  
obj3.greet(); // Amar

//this in Constructor Function
class Person{
    constructor(name) {
        this.name = name;
      }

}
  let p1 = new Person("Amar");
  console.log(p1.name); // Amar
  
// this in setTimeOut (Normal callback)

let obj4 = {
    name: "Amar",
    greet: function () {
      setTimeout(function () {
        console.log("adfsfasfdsdf__aasdffdssdfasdf",this);
        console.log("adfsfasfdsdf__asdfasdf",this.name);//undefined
      }, 1000);
    },
  };
  
  obj4.greet(); // undefined (Because `this` is window)

//this in setTimeout (Arrow Function)
let obj5 = {
    name: "Amar",
    greet: function () {
      setTimeout( ()=> {
        console.log("asdfasdfafd____assddfwe4evxdfasfdsdfsdfs",this);//current object
        console.log("asdfasdfafd____asdfasfdsdfsdfs",this.name);//Amar
      }, 1000);
    },
  };
  
  obj5.greet(); // undefined (Because `this` is window)
  