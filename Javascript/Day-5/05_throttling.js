function throttle(func, limit) {
    let lastFunc; // Last setTimeout reference
    let lastRan;  // Last execution time

    return function(...args) {
        const context = this;

        if (!lastRan) {
            func.apply(context, args); // First time function immediately execute hoga
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan)); // Remaining time calculate karke wait karega
        }
    };
}

//Scroll Event Par Throttling
function logScroll() {
    console.log("User scrolled at", new Date().toLocaleTimeString());
}

// Throttle function with 1 second delay
const throttledScroll = throttle(logScroll, 1000);

// Add event listener
window.addEventListener("scroll", throttledScroll);
