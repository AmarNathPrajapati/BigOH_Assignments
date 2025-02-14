//Data Save Karna
localStorage.setItem("username", "Rahul");
console.log("Data stored");
//Data Read Karna
let user = localStorage.getItem("username");
console.log(user);  // Rahul
//Data Remove Karna
localStorage.removeItem("username");
console.log("Data removed");
//Sab Kuch Clear Karna
localStorage.clear();
console.log("All data cleared");
localStorage.setItem("tagLine","Amar forever")
