
import API from './api.js';
document.addEventListener("DOMContentLoaded", async () => {
    const api = new API('https://dummyjson.com');
    //fetching query parameters
    const urlParams = new URLSearchParams(window.location.search);
    //getting ID of that product
    const productId = urlParams.get("id");
    //accessing the productDetails Element
    const productDetails = document.getElementById("productDetails");


    //updating counter of cart and wishlist.
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
    function updateCounters() {
        let cartBadge = document.getElementById("cartCount");
        let wishlistBadge = document.getElementById("wishlistCount");

        cartBadge.textContent = cart.length;
        wishlistBadge.textContent = wishlist.length;

        // Badge hide/show logic
        cartBadge.style.display = cart.length > 0 ? "block" : "none";
        wishlistBadge.style.display = wishlist.length > 0 ? "block" : "none";
    }
    updateCounters();

    //logic to add product into cart and whishlist
    //add to cart
    window.toggleCart1 = (productId) => {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.includes(productId)) {
            cart = cart.filter(id => id !== productId);
            document.getElementById('addToCart').textContent = "Add To Cart"
        } else {
            cart.push(productId);
            document.getElementById('addToCart').textContent = "Remove From Cart"
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCounters();
    };


    //add to wish list
    window.toggleWishlist1 = (productId) => {
        wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
        if (wishlist.includes(productId)) {
            wishlist = wishlist.filter(id => id !== productId);
            document.getElementById('addToWishlist').textContent = "Add To Wishlist"
        } else {
            wishlist.push(productId);
            document.getElementById('addToWishlist').textContent = "Remove From Wishlist"
        }
        sessionStorage.setItem("wishlist", JSON.stringify(wishlist)); //  Resets on browser close
        updateCounters();
    };
    const getStars = (rating) => {
        let fullStars = Math.round(rating); // 0.5 se upar wale round ho jayenge
        return '⭐'.repeat(fullStars);
    };
    // Function to change the main image
    window.changeImage = function(newSrc) {
        document.getElementById("mainImage").src = newSrc;
    }

    if (productId) {
        //fetching product using that ID
        const product = await api.fetchProductById(productId);
        console.log("asfdasdfsadfddfs____dsafdsdfs", product);
        //populating product details
        productDetails.innerHTML = `
            <div class="product-container">
                <div class="product-image">
            <img id="mainImage" src="${product?.images[0]}" alt="${product?.title}">
            <div class="thumbnails">
    ${product?.images?.length > 1 
        ? product?.images.map(img => 
            `<img class="thumbnail" src="${img}" onclick="changeImage('${img.replace(/'/g, "\\'")}')">`
        ).join('') 
        : ''
    }
</div>

        </div>
                <div class="product-info">
                    <h1>${product?.title}</h1>
                    <p class="brand">Brand: <strong>${product?.brand}</strong></p>
                    <p class="category">Category: <strong>${product?.category}</strong></p>
                    <p class="description">${product?.description}</p>
                    <p class="price">Price: ₹${product?.price} <span class="discount">(${product?.discountPercentage}% off)</span></p>
                    <p class="availability ${product?.availabilityStatus === 'Low Stock' ? 'low-stock' : ''}">Status: ${product?.availabilityStatus}</p>
                    <p class="stock">Stock: ${product?.stock} left</p>
                    <p class="rating">Average Rating: ${getStars(product?.rating)}</p>
                    <p class="shipping">🚚 Shipping: ${product?.shippingInformation}</p>
                    <p class="warranty">🛠 Warranty: ${product?.warrantyInformation}</p>
                    <p class="return-policy">🔄 Return Policy: ${product?.returnPolicy}</p>

                    <div class="product-buttons">
                        
                        

                        <button id="addToCart" class="add-to-cart" onclick="toggleCart1(${product?.id})">
            ${cart.includes(product?.id) ? "Remove from Cart" : "Add to Cart"}
        </button>
        <button id="addToWishlist" class="add-to-wishlist" onclick="toggleWishlist1(${product?.id})">
            ${wishlist.includes(product?.id) ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>




                        <button class="buy-now">Buy Now</button>
                    </div>
                </div>
            </div>
            
            <div class="reviews-section">
                <h2>Customer Reviews</h2>
                <div class="reviews">
                    ${product?.reviews.map(review => `
                        <div class="review">
                            <p><strong>${review.reviewerName}</strong>
                             ${'⭐'.repeat(review.rating)}
                             </p>
                            <p class="review-comment">"${review.comment}"</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
});


