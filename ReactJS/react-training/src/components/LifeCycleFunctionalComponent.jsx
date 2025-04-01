import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Fetching user data...");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data));

    return () => {
      console.log("Cleanup on unmount!");
    };
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold">User Profile</h2>
      {user ? (
        <p>Name: {user.name}</p>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
