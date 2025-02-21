
import API from './api.js';
document.addEventListener("DOMContentLoaded", async () => {
    const api = new API('https://dummyjson.com');
    //fetching query parameters
    const urlParams = new URLSearchParams(window.location.search);
    //getting ID of that product
    const productId = urlParams.get("id");
    //accessing the productDetails Element
    const productDetails = document.getElementById("productDetails");

    if (productId) {
        //fetching product using that ID
        const product = await api.fetchProductById(productId);
        //populating product details
        productDetails.innerHTML = `
            <h1>${product.title}</h1>
            <img src="${product.thumbnail}" alt="${product.title}">
            <p>${product.description}</p>
            <p>Price: ₹${product.price}</p>
            `;
        // <button onclick="addToCart(${product.id})">Add to Cart</button>
        // <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
    }
    //logic to add product into cart and whishlist
    function addToCart(productId) {
        //fetching all product's ID from Cart
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        //avoiding duplicate enty
        if (!cart.includes(productId)) {
            cart.push(productId);
        }
        //updating cart
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function addToWishlist(productId) {
        //fetching all product's ID from wishlist
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        //avoiding duplicate entry
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
        }
        //updating cart
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    window.addToCart = addToCart;
    window.addToWishlist = addToWishlist;
});


