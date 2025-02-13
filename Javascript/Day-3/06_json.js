let json = {
    "name": "Amit",
    "age": 25,
    "isDeveloper": true,
    "skills": ["JavaScript", "Python", "C++"],
    "address": {
      "city": "Delhi",
      "pincode": 110001
    }
  }
console.log(json);

//parsing JSON string to JSON Object
let jsonString = '{"name": "Amit", "age": 25}';
let obj = JSON.parse(jsonString);

console.log(obj.name); //Amit
console.log(obj.age);  //25
console.log(typeof obj); //object


//stringifying the JSON
let user = {
    name: "Amit",
    age: 25,
    isDeveloper: true
  };
  
  let jsonString2 = JSON.stringify(user);
  console.log(jsonString2);   
  console.log(typeof jsonString2); 
  
//Accessing the JSON Data
let jsonData = `{
    "name": "Amit",
    "age": 25,
    "skills": ["JavaScript", "Python"],
    "address": { "city": "Delhi", "pincode": 110001 }
  }`;
  
let newUser = JSON.parse(jsonData);
// console.log(jsonData.);
console.log("adfasfasfasd__",newUser);
console.log(newUser['name']); //Amit
console.log(newUser.skills[0]); //JavaScript
console.log(newUser.address.city); //Delhi
  
//Modifying the data
newUser.age = 30; // Update value
newUser.skills.push("C++"); // Add new skill
newUser.address.pincode = 110002; // Modify nested object

console.log(newUser);


//handling Nested JSON
let data = `{
    "user": {
      "name": "Rahul",
      "age": 28,
      "contacts": {
        "email": "rahul@example.com",
        "phone": "9876543210"
      },
      "skills": ["JavaScript", "React"]
    }
  }`;
  
  let obj1 = JSON.parse(data);
  
  console.log(obj1.user.name); // Output: Rahul
  console.log(obj1.user.contacts.email); // Output: rahul@example.com
  console.log(obj1.user.skills[1]); // Output: React
  