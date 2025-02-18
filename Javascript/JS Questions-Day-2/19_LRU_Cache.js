class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;//initializing capacity of the cache memory
        this.cache = new Map(); // Stores key-value pairs
    }

    get(key) {
        if (!this.cache.has(key)){
            return -1;//if key is not present in the cache memory 
        } 
        //if key is present in the cache memory
        let value = this.cache.get(key);//return the value of that key
        
        // Move key to most recently used
        this.cache.delete(key);//deleted that key 
        this.cache.set(key, value);//make it most recent use

        return value;
    }
    //adding new value in cache memory if not present 
    put(key, value) {
        if (this.cache.has(key)) {
            // Remove old value
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // Remove Least Recently Used (First element in Map)
            // Get all keys from the Map (Iterator object)
            let keysIterator = this.cache.keys(); 
            // Get the first key from the iterator (Oldest inserted key)
            let firstEntry = keysIterator.next(); // { value: <first_key>, done: false }
            //  Extract the actual key value
            let lruKey = firstEntry.value; 
            this.cache.delete(lruKey);
        }

        // Insert new key-value pair
        this.cache.set(key, value);
    }
}

// Example Usage:
const cache = new LRUCache(2);
cache.put(1, 4);
cache.put(2, 5);
console.log("asdasdfsdfad___",cache.cache);
console.log(cache.get(1)); // Output: 4
console.log("asdasdfsdfad___",cache.cache);
cache.put(3, 6);           // 2 gets removed (LRU)
console.log(cache.get(2)); // Output: -1 (since 2 was removed)
console.log(cache.get(3)); // Output: 6
