import Pagination from './pagination.js'
import API from './api.js';


document.addEventListener("DOMContentLoaded", async () => {
    const api = new API('https://dummyjson.com');
    //listing of products:1
    const productContainer = document.getElementById("productContainer");
    //search functionality:1
    const searchBox = document.getElementById("searchBox");
    //listing of categories:1
    const categoryFilter = document.getElementById("categoryFilter");
    const paginationContainer = document.getElementById("paginationContainer");
    const pageSizeSelect = document.getElementById("pageSize");
    //fetching all categories : listing of categories:2
    async function getAllCategories() {
        let response = await api.getAllCategory();
        console.log("asdfsdf____asdfasdf", response);
        categoryFilter.innerHTML = `
        <option value="">All Categories</option>
        ${response?.map(cat => `<option value="${cat?.slug}">${cat?.name}</option>`).join('')}
    `;
    }
    getAllCategories();

    let currentPage = 1;
    let pageSize = 20;
    let totalProducts = 100;
    //infiniteScrolling:1
    let isFetching = false;
    //searching:0
    let allLoadedProducts = []; //Store all fetched data
    // let loadedProductIds = new Set(); // Already added product IDs track karne ke liye
    let cache = {};  // Cache object to store API responses
    //add to cart and wishlit:0
    let cart = JSON.parse(localStorage.getItem("cart")) || []; //
    let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || []; // 


    let pagination = new Pagination(Math.ceil(totalProducts / pageSize));

    pageSizeSelect.addEventListener("change", () => {
        pageSize = parseInt(pageSizeSelect.value);  // Get new page size
        //caching:0
        cache = {}; // Clear cache when page size changes
        let totalPages = Math.ceil(totalProducts / pageSize); // Recalculate total pages
        pagination = new Pagination(totalPages);  // Reset pagination object
        currentPage = 1;  // Reset to first page
        loadProducts(currentPage, categoryFilter.value);  // Reload products
        renderPagination();  // Update pagination UI
    });
    //Scrolling Effects
    function smoothScroll(scrollAmount) {
        let currentScroll = 0;
        let step = 5; // Jitna chhota step hoga, utna smooth lagega

        let interval = setInterval(() => {
            productContainer.scrollBy({ top: step, behavior: "instant" });
            currentScroll += step;
            if (currentScroll >= scrollAmount) {
                clearInterval(interval);
            }
        }, 10); // Ye 10ms delay scroll ko dheere karega
    }
    async function loadProducts(page = 1, category = "") {
        //caching:1
        let cacheKey = `${page}_${category}_${pageSize}`;
        console.log("asfsfdsfsdf__adfd", cacheKey);
        if (cache[cacheKey]) {
            renderProducts(cache[cacheKey]);
            setTimeout(smoothScroll(50), 1000);
            renderPagination();
            observer.disconnect();
            document.getElementById("scrollEnd").style.display = 'none';
            // Scroll function disable kar do
            productContainer.scrollTop = 0;
            window.disableScroll = true;
            return;
        }else{
            window.disableScroll = false;
        }
        if (isFetching) return;
        isFetching = true;
        document.getElementById("scrollEnd").style.display = 'block'; 
        let skip = (page - 1) * pageSize;
        if (category) {
            searchBox.value = "";
        }
        //listing of product:2
        let response = category ?
            await api.fetchProductsByCategory(category, pageSize, skip) :
            await api.fetchAllProducts(pageSize, skip);
        
        totalProducts = response.total || 100;
        console.log("asdfsdfsdfdsf__asdfsd", pageSize);
        pagination = new Pagination(Math.ceil(totalProducts / pageSize));
        pagination.setPage(page);  //  Ensure pagination state update ho

        if (page === 1) {
            //searching:01
            allLoadedProducts = response.products; //  First load: Replace all data
            productContainer.innerHTML = "";
        } else {
            allLoadedProducts.push(...response.products); //  Append new products
        }
        //caching:3
        cache[cacheKey] = response.products; // Store response in cache
        //listing of Product:4
        renderProducts(allLoadedProducts);
        renderPagination();
        isFetching = false;
        if (page >= pagination.totalPages) {
            document.getElementById("scrollEnd").style.display = 'none';
            observer.disconnect();
        }
    }
 
    //listing of product:4
    function renderProducts(products, isSearch = false) {
        console.log("Rendering products...");
        if (products.length > 0) {
            console.log("asfasdfasdfasdf____asdfsadf", products[0]);
            productContainer.innerHTML = products?.map(product =>
                `
        <div class="product-card">
        <img src="${product?.thumbnail}" alt="${product.title}">
        <h3>${product?.title}</h3>
        <p>₹${product?.price}</p>
        <button onclick="toggleCart(${product?.id})">
            ${cart.includes(product?.id) ? "Remove from Cart" : "Add to Cart"}
        </button>
        <button onclick="toggleWishlist(${product?.id})">
            ${wishlist.includes(product?.id) ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
        <a href="product.html?id=${product?.id}" class="view-details">View Details</a>
    </div>
`
            ).join('');
        } else {
            productContainer.innerHTML = `
                    <b> No Product Found! </b>
                `
        }
        // Observer ko temporarily disconnect karo jab search active ho
        if (isSearch) {
            observer.disconnect();
            console.log("Observer DISABLED due to search");
            return;  // Search mode me infinite scroll nahi chalega
        }

        let scrollEnd = document.getElementById("scrollEnd");
        if (!scrollEnd) {
            scrollEnd = document.createElement("div");
            scrollEnd.id = "scrollEnd";
            scrollEnd.style.height = "20px"; // Ensure it has height
            scrollEnd.textContent = "Loading More..."
            productContainer.appendChild(scrollEnd);
        } else {
            productContainer.appendChild(scrollEnd); // Reposition `scrollEnd`
        }
        observer.observe(scrollEnd);//observer triggered if it view scrollEnd in viewport
    }

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
    //add to cart
    window.toggleCart = (productId) => {
        if (cart.includes(productId)) {
            cart = cart.filter(id => id !== productId);
        } else {
            cart.push(productId);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderProducts(allLoadedProducts);
        updateCounters();
    };
    //add to wish list
    window.toggleWishlist = (productId) => {
        if (wishlist.includes(productId)) {
            wishlist = wishlist.filter(id => id !== productId);
        } else {
            wishlist.push(productId);
        }
        sessionStorage.setItem("wishlist", JSON.stringify(wishlist)); //  Resets on browser close
        renderProducts(allLoadedProducts);
        updateCounters();
    };
    //seaching functionlity
    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    }
    //searching functionlity:2
    function applySearch(query) {
        let filteredProducts = allLoadedProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        renderProducts(filteredProducts, query.length > 0);
    }

    //searching functionlity:3
    const debounceSearch = debounce((query) => {
        applySearch(query);
    }, 500);
    //searching functionlity:4
    searchBox.addEventListener("input", () => {
        debounceSearch(searchBox.value);
    });
    //category functionaly
    categoryFilter.addEventListener("change", () => {
        //caching: 4
        cache = {}; // Reset cache when category changes
        loadProducts(1, categoryFilter.value);
    });

    

    function smoothScrollOnClick(pageSize) {
        if (window.disableScroll) return;
        let productContainer = document.querySelector(".product-container"); // Ensure correct container selector
        let productCards = document.querySelectorAll(".product-card"); // Select all product cards

        if (!productContainer || productCards.length === 0) return; // If elements not found, exit

        let productCardHeight = productCards[0].offsetHeight; // Height of one product card
        let containerWidth = productContainer.clientWidth; // Width of product container
        let productCardWidth = productCards[0].offsetWidth; // Width of one product card

        // Calculate number of product cards in one row
        let cardsPerRow = Math.floor(containerWidth / productCardWidth);
        if (cardsPerRow === 0) cardsPerRow = 1; // Safety check to avoid division by zero

        // Calculate number of rows per page
        let rowsPerPage = Math.ceil(pageSize / cardsPerRow);

        // Final scroll amount
        let scrollAmount = rowsPerPage * productCardHeight;

        let currentScroll = 0;
        let step = Math.ceil(scrollAmount / 50); // Smaller steps for smooth scrolling

        let interval = setInterval(() => {
            productContainer.scrollBy({ top: step, behavior: "instant" });
            currentScroll += step;
            if (currentScroll >= scrollAmount) {
                clearInterval(interval);
            }
        }, 10);
    }




    function gotoPage(page) {
        if (page !== "..." && currentPage !== page) {  //  Prevent duplicate loading
            pagination.setPage(page);  //  Pagination object update karega
            currentPage = page;  //  Global `currentPage` update
            loadProducts(currentPage, categoryFilter.value);
            renderPagination(); //  Update pagination UI
        }
        // Scroll logic add karein
        setTimeout(smoothScrollOnClick(pageSize), 1000); // Scroll animation
    }


    function prevPage() {
        gotoPage(pagination.prevPage());
    }

    function nextPage() {
        gotoPage(pagination.nextPage());
    }


    window.gotoPage = gotoPage;
    window.prevPage = prevPage;
    window.nextPage = nextPage;


    function renderPagination() {
        let pages = pagination.getPages(); // 
        paginationContainer.innerHTML = `
            <button onclick="prevPage()" ${currentPage === 1 ? "disabled" : ""}>⬅Prev</button>
            ${pages?.map(page =>
            page === "..." ? `<span>...</span>` :
                `<button onclick="gotoPage(${page})" ${page === currentPage ? "class='active'" : ""}>${page}</button>`
        ).join('')}
            <button onclick="nextPage()" ${currentPage === pagination.totalPages ? "disabled" : ""}>Next➡</button>
        `;
    }



    let lastScrollTop = 0;
    const observer = new IntersectionObserver(entries => {
        console.log("dfdsadfds____asdfdsf", entries);
        let currentScrollTop = productContainer.scrollTop;
        if (entries[0].isIntersecting && !isFetching && currentPage < pagination.totalPages) {//checking div is visible or not, cheking that any api request already running or not and also checking unnecessary API calls
            if (searchBox.value.length > 0) {
                return;
            }
            if (currentScrollTop > lastScrollTop) {
                if (currentPage < pagination.totalPages) {
                    currentPage++;
                }
            } else {
                if (currentPage > 1) {
                    currentPage--;
                }
            }
            lastScrollTop = currentScrollTop;
            loadProducts(currentPage, categoryFilter.value);
            renderPagination();
            //Scroll Down Smoothly when New Products Load
            setTimeout(smoothScroll(200), 1000);
        }
    }, { root: document.getElementById("productContainer"), rootMargin: "50px", threshold: 0.5 });

    observer.observe(document.getElementById("scrollEnd"));
    loadProducts();


});
