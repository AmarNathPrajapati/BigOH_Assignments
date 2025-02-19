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
        console.log("adfasdfdf___",this.events);
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
            this.events[event] = this.events[event].filter(l => l !== listener); 
        }
    }
}
const emitter = new EventEmitter();  // Create a new EventEmitter instance

// Create a listener function
const greetName = (name) => console.log(`Hello, ${name}`);
const sayHi = (name) => console.log(`Hi, ${name}`);

emitter.on('greet', greetName);
emitter.on('greet', sayHi);

emitter.emit('greet', 'Amar'); 

emitter.off('greet', greetName);

emitter.emit('greet', 'Amit');

