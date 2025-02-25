import API from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const api = new API('https://dummyjson.com');
    const wishlistContainer = document.getElementById("wishlistContainer");
    let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
    //implementing caching functionality
    let wishlistData = JSON.parse(sessionStorage.getItem("wishlistData")) || {};
    //updating counter of cart and wishlist.
    function updateCounters() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];

        let cartBadge = document.getElementById("cartCount");
        let wishlistBadge = document.getElementById("wishlistCount");

        cartBadge.textContent = cart.length; 
        wishlistBadge.textContent = wishlist.length;

        // Badge hide/show logic
        cartBadge.style.display = cart.length > 0 ? "block" : "none";
        wishlistBadge.style.display = wishlist.length > 0 ? "block" : "none";
    }
    updateCounters();

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Wishlist is empty.</p>";
        return;
    }
    //rendering wishlist
    function renderWishlist(wishlistItems){
        wishlistContainer.innerHTML = Object.values(wishlistItems)?.map(product => `
            <div class="product-card" id="product-${product?.id}">
                <img src="${product?.thumbnail}" alt="${product?.title}">
                <h3>${product?.title}</h3>
                <h4>${product?.description}</h4>
                <p>₹${product?.price}</p>
                <button onclick="removeFromWishlist(${product?.id})">Remove From Wishlist</button>
            </div>
        `).join('');
    }
    //Caching logic
    if(Object.keys(wishlistData).length === wishlist.length){
        renderWishlist(wishlistData);//No need to fetch data
    }else{
        const missingIds = wishlist.filter(id => !wishlistData[id])
        const wishlistItems = await Promise.all(missingIds.map(id => api.fetchProductById(id)));
        wishlistItems.forEach(product=>{
            wishlistData[product.id] = product;
        })
        //update wishlist data
        sessionStorage.setItem('wishlistData',JSON.stringify(wishlistData));
        renderWishlist(wishlistData);
    }

    

    window.removeFromWishlist = (productId) => {
        wishlist = wishlist.filter(id => id !== productId);
        delete wishlistData[productId];//remove product from cache
        //update cache
        sessionStorage.setItem('wishlistData', JSON.stringify(wishlistData));
        sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
        //removing product from the UI
        document.getElementById(`product-${productId}`).remove();
        //update UI
        updateCounters();
        if(wishlist.length === 0){
            wishlistContainer.innerHTML = "<p> Wishlist is empty.</p>";
        }
    };
});
