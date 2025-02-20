//ensuring that script should run after loaded all html page.
document.addEventListener("DOMContentLoaded", async () => {
    //selecting DOM elements
    const productContainer = document.getElementById("productContainer");
    const searchBox = document.getElementById("searchBox");
    const categoryFilter = document.getElementById("categoryFilter");
    const paginationContainer = document.getElementById("paginationContainer");
    //setting pagination variable
    let currentPage = 1;
    let pageSize = 20;
    let totalProducts = 100;
    let pagination = new Pagination(Math.ceil(totalProducts / pageSize));

    //loading products with category and searchQuery as optional parameters
    async function loadProducts(page = 1, category = "", searchQuery = "") {
        //showing loading until get response
        productContainer.innerHTML = "<p>Loading...</p>";
        //calculating offset for the pagination e.g for page 2 skip first 20 products
        let skip = (page - 1) * pageSize;
        let response;
        //API Calls
        if (searchQuery) {
            response = await api.searchProducts(searchQuery);
        } else if (category) {
            response = await api.fetchProductsByCategory(category, pageSize, skip);
        } else {
            response = await api.fetchAllProducts(pageSize, skip);
        }

        totalProducts = response.total || 100;
        //updating pagination instance
        pagination = new Pagination(Math.ceil(totalProducts / pageSize));

        productContainer.innerHTML = response.products.map(product => `
            <div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>₹${product.price}</p>
                <a href="product.html?id=${product.id}" style="display: inline-block; margin: 10px;">View Details</a></br>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
            </div>
        `).join('');
        //rendering pagination button
        renderPagination();
    }

    
    //debouncing 
    function debounce(func, delay){
        let timer;
        return function(...args){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                func(...args)
            },delay)
        }
    }
    const debounceSearch = debounce(loadProducts, 1000)
    //structure of pagination
    function renderPagination() {
        let pages = pagination.getPages();//return array
        paginationContainer.innerHTML = `
            <button onclick="prevPage()">⬅</button>
            ${pages.map(page => `<button onclick="gotoPage(${page})">${page}</button>`).join('')}
            <button onclick="nextPage()">➡</button>
        `;
    }

    function gotoPage(page) {
        if (page !== "...") {
            //updating current page.
            currentPage = page;
            //loading product of new page.
            loadProducts(currentPage, categoryFilter.value, searchBox.value);
        }
    }
    //handle click of previous and next buttong
    function prevPage() {
        gotoPage(pagination.prevPage());
    }

    function nextPage() {
        gotoPage(pagination.nextPage());
    }
    //search filter
    searchBox.addEventListener("input", () => {
        debounceSearch(1, categoryFilter.value, searchBox.value);
    });
    //category filter
    categoryFilter.addEventListener("change", () => {
        loadProducts(1, categoryFilter.value);
    });
    //default fetch which is page 1 with no category and search field.
    loadProducts();
});
