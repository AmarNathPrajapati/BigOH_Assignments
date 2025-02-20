class API {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    //API for fetch all the products
    async fetchAllProducts(limit = 100, skip = 0) {
        const response = await fetch(`${this.baseURL}/products?limit=${limit}&skip=${skip}`);
        return response.json();
    }
    //API for fetch product details by ID 
    async fetchProductById(id) {
        const response = await fetch(`${this.baseURL}/products/${id}`);
        return response.json();
    }
    //API for fetch product by category
    async fetchProductsByCategory(category, limit = 30, skip = 0) {
        const response = await fetch(`${this.baseURL}/products/category/${category}?limit=${limit}&skip=${skip}`);
        return response.json();
    }
    //search Query
    async searchProducts(query) {
        const response = await fetch(`${this.baseURL}/products/search?q=${query}`);
        return response.json();
    }
}

// API Instance
const api = new API('https://dummyjson.com');
