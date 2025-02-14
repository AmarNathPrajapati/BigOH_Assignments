//GET Request Using Async/Await
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

//POST Request Using Async/Await
async function createPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "New Post",
                body: "This is a test post",
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log("Post Created:", data);
    } catch (error) {
        console.error("Error creating post:", error);
    }
}

createPost();
//PUT (Update Data) Using Async/Await
async function updatePost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated Post",
                body: "This is an updated post",
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log("Post Updated:", data);
    } catch (error) {
        console.error("Error updating post:", error);
    }
}

updatePost();

//DELETE (Delete Data) Using Async/Await
async function deletePost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        console.log("Post Deleted Successfully");
    } catch (error) {
        console.error("Error deleting post:", error);
    }
}

deletePost();
