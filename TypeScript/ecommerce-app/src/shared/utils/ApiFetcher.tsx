import { Product } from "../types";

export default class ApiFetcher {
    private baseURL: string;
  
    constructor(baseURL: string) {
      this.baseURL = baseURL;
    }
  
    // 🔹 Generic Fetch Method (Reusable for GET, POST, PUT, DELETE)
    private async request<T>(endpoint: string, method: string = "GET", body?: unknown): Promise<T> {
      const options: RequestInit = {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
      };
  
      const response = await fetch(`${this.baseURL}${endpoint}`, options);
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      
      return response.json() as Promise<T>;
    }
  
    // 🔹 Fetch All Products with Pagination
    async fetchAllProducts(limit: number = 100, skip: number = 0) {
      return this.request<{ products: Product[] }>(`/products?limit=${limit}&skip=${skip}`);
    }
  
    // 🔹 Fetch Product Details by ID
    async fetchProductById(id: number) {
      return this.request<Product>(`/products/${id}`);
    }
  
    // 🔹 Fetch Products by Category
    async fetchProductsByCategory(category: string, limit: number = 30, skip: number = 0) {
      return this.request<{ products: Product[] }>(`/products/category/${category}?limit=${limit}&skip=${skip}`); //remove query parama from here
    }
  
    // 🔹 Search Products
    async searchProducts(query: string) {
      return this.request<{ products: Product[] }>(`/products/search?q=${query}`);
    }
  
    // 🔹 Fetch All Categories
    async getAllCategories() {
      return this.request<string[]>(`/products/categories`);
    }
  }
  