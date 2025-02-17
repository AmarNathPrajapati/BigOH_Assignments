const obj = {
    name: "Rahul"
  };
  
  console.log("asfsf____asddfsdf",obj.__proto__); // This will show the prototype object of 'obj'
  

  const obj1 = {
    name: "Rahul"
  };
  
  const obj2 = Object.create(obj1);  // obj2's prototype is obj1
  
  console.log(obj2.name);  // This will print "Rahul", as obj2 doesn't have 'name', it will look in obj1
  console.log(obj2.__proto__); // This will print the prototype of obj2, which is obj1
  