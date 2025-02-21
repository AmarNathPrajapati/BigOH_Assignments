import Pagination from './pagination.js'
import API from './api.js';


document.addEventListener("DOMContentLoaded", async () => {
    const api = new API('https://dummyjson.com');
    const productContainer = document.getElementById("productContainer");
    const searchBox = document.getElementById("searchBox");
    const categoryFilter = document.getElementById("categoryFilter");
    const paginationContainer = document.getElementById("paginationContainer");

    let currentPage = 1;
    let pageSize = 20;
    let totalProducts = 100;
    let isFetching = false;
    let allLoadedProducts = []; //Store all fetched data
    let loadedProductIds = new Set(); // Already added product IDs track karne ke liye

    let cart = JSON.parse(localStorage.getItem("cart")) || []; //
    let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || []; // 


    let pagination = new Pagination(Math.ceil(totalProducts / pageSize));

    async function loadProducts(page = 1, category = "") {
        if (isFetching) return;
        isFetching = true;

        let skip = (page - 1) * pageSize;
        let response = category ?
            await api.fetchProductsByCategory(category, pageSize, skip) :
            await api.fetchAllProducts(pageSize, skip);

        totalProducts = response.total || 100;
        pagination = new Pagination(Math.ceil(totalProducts / pageSize));
        pagination.setPage(page);  //  Ensure pagination state update ho

        if (page === 1) {
            allLoadedProducts = response.products; //  First load: Replace all data
            productContainer.innerHTML = "";
        } else {
            allLoadedProducts.push(...response.products); //  Append new products
        }

        //remove duplicacy
        // let newProducts = response.products.filter(product => {
        //     if (loadedProductIds.has(product.id)) {
        //         return false;
        //     }
        //     loadedProductIds.add(product.id); //Add new product ID to Set
        //     return true;
        // });

        // if (page === 1) {
        //     allLoadedProducts = newProducts;  //First load: Replace all products
        //     productContainer.innerHTML = "";
        // } else {
        //     allLoadedProducts.push(...newProducts); //Append unique products only
        // }

        renderProducts(allLoadedProducts);
        renderPagination();
        isFetching = false;
    }


    function renderProducts(products, isSearch = false) {
        console.log("Rendering products...");
        if (products.length > 0) {
            productContainer.innerHTML = products.map(product => `
                <div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>₹${product.price}</p>
                <button onclick="toggleCart(${product.id})">
                    ${cart.includes(product.id) ? "Remove from Cart" : "Add to Cart"}
                </button>
                <button onclick="toggleWishlist(${product.id})">
                    ${wishlist.includes(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>
            </div>
            `).join('');
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
            scrollEnd.style.height = "10px"; // Ensure it has height
            productContainer.appendChild(scrollEnd);
        } else {
            productContainer.appendChild(scrollEnd); // Reposition `scrollEnd`
        }

        //**Observer ko sirf tab re-attach karo jab search OFF ho**
        observer.observe(scrollEnd);
        console.log("Observer RE-ENABLED");
    }
    window.toggleCart = (productId) => {
        if (cart.includes(productId)) {
            cart = cart.filter(id => id !== productId);
        } else {
            cart.push(productId);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderProducts(allLoadedProducts);
    };

    window.toggleWishlist = (productId) => {
        if (wishlist.includes(productId)) {
            wishlist = wishlist.filter(id => id !== productId);
        } else {
            wishlist.push(productId);
        }
        sessionStorage.setItem("wishlist", JSON.stringify(wishlist)); //  Resets on browser close
        renderProducts(allLoadedProducts);
    };

    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    }

    function applySearch(query) {
        let filteredProducts = allLoadedProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );

        renderProducts(filteredProducts, query.length > 0);
    }


    const debounceSearch = debounce((query) => {
        applySearch(query);
    }, 500);

    searchBox.addEventListener("input", () => {
        debounceSearch(searchBox.value);
    });

    categoryFilter.addEventListener("change", () => {
        loadProducts(1, categoryFilter.value);
    });


    function gotoPage(page) {
        if (page !== "..." && currentPage !== page) {  //  Prevent duplicate loading
            console.log("Goto Page Clicked:", page);
            pagination.setPage(page);  //  Pagination object update karega
            currentPage = page;  //  Global `currentPage` update
            loadProducts(currentPage, categoryFilter.value);
            renderPagination(); //  Update pagination UI
        }
    }


    function prevPage() {
        console.log("Previous Button Clicked");
        gotoPage(pagination.prevPage());
    }

    function nextPage() {
        console.log("Next Button Clicked");
        gotoPage(pagination.nextPage());
    }


    window.gotoPage = gotoPage;
    window.prevPage = prevPage;
    window.nextPage = nextPage;


    function renderPagination() {
        let pages = pagination.getPages(); // 

        console.log("Rendering Pagination... Pages:", pages);

        paginationContainer.innerHTML = `
            <button onclick="prevPage()" ${currentPage === 1 ? "disabled" : ""}>⬅</button>
            ${pages.map(page =>
            page === "..." ? `<span>...</span>` :
                `<button onclick="gotoPage(${page})" ${page === currentPage ? "class='active'" : ""}>${page}</button>`
        ).join('')}
            <button onclick="nextPage()" ${currentPage === pagination.totalPages ? "disabled" : ""}>➡</button>
        `;
    }

    let lastScrollTop = 0;
    const observer = new IntersectionObserver(entries => {
        let currentScrollTop = productContainer.scrollTop;
        console.log(`Current Scroll Top: ${currentScrollTop}, Last Scroll Top: ${lastScrollTop}`);
        if (entries[0].isIntersecting && !isFetching && currentPage < pagination.totalPages) {
            console.log("🔄 Infinite Scroll Triggered!");

            if (searchBox.value.length > 0) {
                console.log("🚫 Search Active: Infinite Scroll Blocked!");
                return;
            }
            if (currentScrollTop > lastScrollTop) {
                console.log("⬇ Scrolling Down");
                if (currentPage < pagination.totalPages) {
                    currentPage++;
                }
            } else {
                console.log("⬆ Scrolling Up");
                if (currentPage > 1) {
                    currentPage--;
                }
            }
            console.log(`🔥 Updated Current Page: ${currentPage}`);
            lastScrollTop = currentScrollTop;
            loadProducts(currentPage, categoryFilter.value);
            renderPagination();
        }
    }, { root: document.getElementById("productContainer"), rootMargin: "50px", threshold: 0.5 });

    observer.observe(document.getElementById("scrollEnd"));
    loadProducts();



});
