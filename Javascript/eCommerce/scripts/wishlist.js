import API from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const api = new API('https://dummyjson.com');
    const wishlistContainer = document.getElementById("wishlistContainer");
    let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Wishlist is empty.</p>";
        return;
    }

    const wishlistItems = await Promise.all(wishlist?.map(id => api?.fetchProductById(id)));
    wishlistContainer.innerHTML = wishlistItems?.map(product => `
        <div class="wishlist-item">
            <img src="${product?.thumbnail}" alt="${product?.title}">
            <h3>${product?.title}</h3>
            <p>₹${product?.price}</p>
            <button onclick="removeFromWishlist(${product?.id})">Remove</button>
        </div>
    `).join('');

    window.removeFromWishlist = (productId) => {
        wishlist = wishlist.filter(id => id !== productId);
        sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
        location.reload();
    };
    //updating counter of cart and wishlist.
    function updateCounters() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];

        let cartBadge = document.getElementById("cartCount");
        let wishlistBadge = document.getElementById("wishlistCount");

        cartBadge.textContent = cart.length;
        wishlistBadge.textContent = wishlist.length;

        // Badge hide/show logic
        cartBadge.style.display = cart.length > 0 ? "block" : "none";
        wishlistBadge.style.display = wishlist.length > 0 ? "block" : "none";
    }
    updateCounters();
});
