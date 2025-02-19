class EventEmitter {
    constructor() {
        this.events = {}; // Store events with their listeners
    }

    // Register a listener for a specific event
    on(event, listener) {
        if (!this.events[event]) { 
            this.events[event] = []; // If the event doesn't exist, create an empty array
        }
        this.events[event].push(listener); // Add the listener to the event's array
    }

    // Emit an event, which will call all its listeners
    emit(event, ...args) {
        if (this.events[event]) { // Check if event exists
            this.events[event].forEach(listener => listener(...args)); // Trigger each listener with the passed arguments
        }
    }

    // Remove a specific listener from an event
    off(event, listener) {
        if (this.events[event]) { 
            this.events[event] = this.events[event].filter(l => l !== listener); // Remove the listener from the event's array
        }
    }
}
const emitter = new EventEmitter();  // Create a new EventEmitter instance

// Create a listener function
const greetName = (name) => console.log(`Hello, ${name}`);
const sayHi = (name) => console.log(`Hi, ${name}`);

// Add the listener for 'greet' event
emitter.on('greet', greetName);
emitter.on('greet', sayHi);

// Emit the 'greet' event with 'Alice' as the argument
emitter.emit('greet', 'Alice'); // Output: Hello, Alice

// Remove the 'greet' listener
emitter.off('greet', greetName);

// Emit the 'greet' event again with 'Bob', but no listener exists now
emitter.emit('greet', 'Bob'); // No output

//bhai, es code ki ek ek line samajha do hinglish me... aur ye event kya hota hai... kaise work karata hai....es example ko achchhe se samajha do