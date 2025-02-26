document.cookie = "username=JohnDoe"; // Basic cookie set
document.cookie = "theme=dark; expires=Fri, 01 Mar 2025 12:00:00 UTC"; // Expiration ke sath
document.cookie = "cartItems=5; path=/"; // Path define karke
console.log(document.cookie); 
// Output: "username=JohnDoe; theme=dark; cartItems=5"
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

console.log(getCookie("username")); // Output: JohnDoe
document.cookie = "username=JaneDoe"; // Overwrite ho jayega
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
// Set-Cookie: sessionToken=abc123; HttpOnly; Secure; SameSite=Strict