document.addEventListener("DOMContentLoaded", async () => {
    //getting the wishlist container to show wishlist
    const wishlistContainer = document.getElementById("wishlistContainer");
    //fetching wishlist from localstorage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Wishlist is empty.</p>";
        return;
    }
    //when all the request resolved then return the result.
    const wishlistItems = await Promise.all(wishlist.map(id => api.fetchProductById(id)));
    //adding wishlist products to wishlist container
    wishlistContainer.innerHTML = wishlistItems.map(product => `
        <div class="wishlist-item">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>₹${product.price}</p>
            <button onclick="removeFromWishlist(${product.id})">Remove</button>
        </div>
    `).join('');
});
//logic to remove product from wishlist
function removeFromWishlist(productId) {
    //fetching wishlist from localstorage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    //removing element from local storage
    wishlist = wishlist.filter(id => id !== productId);
    //updating the wishlist element
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    location.reload();
}
