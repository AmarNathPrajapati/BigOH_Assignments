import API from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const api = new API('https://dummyjson.com');
    const cartContainer = document.getElementById("cartContainer");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Cart is empty.</p>";
        return;
    }

    const cartItems = await Promise.all(cart?.map(id => api.fetchProductById(id)));
    cartContainer.innerHTML = cartItems?.map(product => `
        <div class="cart-item">
            <img src="${product?.thumbnail}" alt="${product?.title}">
            <h3>${product?.title}</h3>
            <p>₹${product?.price}</p>
            <button onclick="removeFromCart(${product?.id})">Remove</button>
        </div>
    `).join('');

    window.removeFromCart = (productId) => {
        cart = cart.filter(id => id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    };
});

