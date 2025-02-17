function debounce(func, delay) {
    let timer; // Timer variable to track function execution delay
    return function(...args) {
        clearTimeout(timer); // Reset previous timer
        // timer = setTimeout(() => func.apply(this, args), delay); // Set new timer
        timer = setTimeout(() =>
             console.log("asdfsddfs___asdfadsf",args)
        , delay); // Set new timer
    };
}

// Example: Search Suggestion (Avoid unnecessary API calls)
function fetchData(query) {
    console.log("Fetching data for:", query);
}

// Creating debounce function with 500ms delay
const debouncedSearch = debounce(fetchData, 2000);

// Simulating user input in a search box
debouncedSearch("Hello");
debouncedSearch("Hello W");
debouncedSearch("Hello World2"); 
// Only "Fetching data for: Hello World" will be logged after 500ms
