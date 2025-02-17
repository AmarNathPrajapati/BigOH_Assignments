function sayHello(name) {
    console.log(`Hello, ${name}`);
}

// Without apply (Wrong)
setTimeout(sayHello("Rahul"), 1000); 
// ❌ Galat: yeh `sayHello("Rahul")` turant execute ho jayega, bina delay ka wait kiye.

// Correct Approach:
setTimeout(() => sayHello("Rahul"), 1000); 
// ✅ Sahi: function reference pass kiya, jo delay ke baad execute hoga.
