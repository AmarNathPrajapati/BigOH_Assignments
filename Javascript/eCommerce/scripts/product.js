
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
            <div class="product-container">
                <div class="product-image">
                    <img src="${product?.thumbnail}" alt="${product?.title}">
                </div>
                <div class="product-info">
                    <h1>${product?.title}</h1>
                    <p class="brand">Brand: <strong>${product?.brand}</strong></p>
                    <p class="category">Category: <strong>${product?.category}</strong></p>
                    <p class="description">${product?.description}</p>
                    <p class="price">Price: ₹${product?.price} <span class="discount">(${product?.discountPercentage}% off)</span></p>
                    <p class="availability ${product?.availabilityStatus === 'Low Stock' ? 'low-stock' : ''}">Status: ${product?.availabilityStatus}</p>
                    <p class="stock">Stock: ${product?.stock} left</p>
                    <p class="rating">⭐ Rating: ${product?.rating}</p>
                    <p class="shipping">🚚 Shipping: ${product?.shippingInformation}</p>
                    <p class="warranty">🛠 Warranty: ${product?.warrantyInformation}</p>
                    <p class="return-policy">🔄 Return Policy: ${product?.returnPolicy}</p>

                    <div class="product-buttons">
                        <button class="add-to-cart" onclick="addToCart(${product?.id})">Add to Cart</button>
                        <button class="add-to-wishlist" onclick="addToWishlist(${product?.id})">Add to Wishlist</button>
                        <button class="buy-now">Buy Now</button>
                    </div>
                </div>
            </div>
            
            <div class="reviews-section">
                <h2>Customer Reviews</h2>
                <div class="reviews">
                    ${product?.reviews.map(review => `
                        <div class="review">
                            <p><strong>${review.reviewerName}</strong> (${review.rating} ⭐)</p>
                            <p class="review-comment">"${review.comment}"</p>
                        </div>
                    `).join('')}
                </div>
            </div>
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


