//creating a empty map
const myMap = new Map();
console.log(myMap);

//initializing a Map (unique keys)
const newMap = new Map([
    ["name","Amar"],
])
newMap.set("name","Amit")
console.log("asdfsaddsf_____adsfafsd",newMap);

//cloning a Map
const originalMap = new Map([
    ["name", "Rahul"],
    ["age", 25]
]);
const clonedMap = new Map(originalMap);
console.log(clonedMap.get("name")); // Rahul
console.log(clonedMap.get("age"));  // 25

//Using Object.entries() (Convert Object to Map)
const userObj = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};
console.log("adfadfsaf___asdfa",Object.entries(userObj));
const userMap = new Map(Object.entries(userObj));
console.log(userMap.get("name")); // Rahul
console.log(userMap.get("age"));  // 25
console.log(userMap.get("city")); // Delhi

//Map method
const empDetails = new Map();
empDetails.set("name", "Amit");
empDetails.set("designation", "Software Engineer");
empDetails.set("salary", 50000);
empDetails.set(1, "One as key"); // Number as key
console.log(empDetails);
console.log(empDetails.get("name")); // Amit
console.log("afadfa__adsfa",empDetails.get(1)); // One as key
console.log(empDetails.has("salary")); // true
console.log("asdfsdf___asfasf",empDetails.has("age")); // false
empDetails.delete("designation");
console.log("asffdsf___asdfasdf",empDetails); // Output: Map(3)
console.log(empDetails.size); // 3
empDetails.clear();
console.log("adsfdf___asfsdfs",empDetails); // Output: Map(0) {}

//iterating a Map

//using forEach loop
empDetails.forEach((value, key) => {
    console.log(key, ":", value);
});
//Using for of loop
for(let [key,val] of empDetails){
    console.log(key,":",val);
}

//Use case
//Storing Key-Value Pairs Dynamically
const settings = new Map();
settings.set("theme", "dark");
settings.set("fontSize", "14px");
settings.set("showSidebar", true);
console.log(settings.get("theme")); // dark

//Using Objects as Keys
const objKey = { id: 1 };
const map = new Map();
map.set(objKey, "User Data");
console.log("asdfsdf__asdfasdf",map.get(objKey)); // User Data
console.log("asdfdsfsdfdsf__asdfasdf",map);

//Counting Word Frequency
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = new Map();
words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
});
console.log(wordCount);
