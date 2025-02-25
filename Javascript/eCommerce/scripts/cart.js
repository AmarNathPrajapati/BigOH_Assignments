import API from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const api = new API('https://dummyjson.com');
    const cartContainer = document.getElementById("cartContainer");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //implementing caching functionality
    let cartData = JSON.parse(localStorage.getItem("cartData")) || {}; // Cached data

    //updating counter of cart and wishlist.
    function updateCounters() {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
        console.log("adfasfdsdasdfdsf____asdsfasasdfadsf", cart.length);

        let cartBadge = document.getElementById("cartCount");
        let wishlistBadge = document.getElementById("wishlistCount");

        cartBadge.textContent = cart.length;
        wishlistBadge.textContent = wishlist.length;

        // Badge hide/show logic
        cartBadge.style.display = cart.length > 0 ? "block" : "none";
        wishlistBadge.style.display = wishlist.length > 0 ? "block" : "none";
    }
    updateCounters();

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Cart is empty.</p>";
        return;
    }
    //rendering cart
    function renderCart(cartItems) {
        cartContainer.innerHTML = Object.values(cartItems).map(product => `
            <div class="product-card" id="product-${product.id}">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <h4>${product.description}</h4>
            <p>₹${product.price}</p>
            <button onclick="removeFromCart(${product.id})">Remove From Cart</button>
            </div>
            `).join('');
    }

    // Caching Logic: Load data from localStorage first
    if (Object.keys(cartData).length === cart.length) {
        renderCart(cartData);
    } else {
        const missingIds = cart.filter(id => !cartData[id]);
        if (missingIds.length === 0) { 
            renderCart(cartData);
        } else {
            const cartItems = await Promise.all(missingIds.map(id => api.fetchProductById(id)));
            cartItems.forEach(product => {
                cartData[product.id] = product;
            });
            localStorage.setItem("cartData", JSON.stringify(cartData)); // Cache update करो
            renderCart(cartData);
        }
    }




    // **Remove from cart without reloading**
    window.removeFromCart = (productId) => {
        cart = cart.filter(id => id !== productId);
        delete cartData[productId];

        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartData", JSON.stringify(cartData));
        //remove that product from UI
        document.getElementById(`product-${productId}`).remove(); // Remove from DOM
        updateCounters();

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Cart is empty.</p>";
        }
    };
});

