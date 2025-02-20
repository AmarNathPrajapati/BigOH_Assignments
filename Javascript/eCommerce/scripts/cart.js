document.addEventListener("DOMContentLoaded", async () => {
    //selecting the DOM element++
    const cartContainer = document.getElementById("cartContainer");
    //getting products from localstorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //checking cart length
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Cart is empty.</p>";
        return;
    }
    //when all request are completed then only return the result
    const cartItems = await Promise.all(cart.map(id => api.fetchProductById(id)));
    //redering the Cart Details
    cartContainer.innerHTML = cartItems.map(product => `
        <div class="cart-item">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>₹${product.price}</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        </div>
    `).join('');
});

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //removing the product from the cart
    cart = cart.filter(id => id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
