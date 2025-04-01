function UserList() {
    const users = [
        { id: 1, name: "Amit" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Sita" },
    ];

    return (
        <ul className="list-disc pl-5">
            {users.map((user) => (
                <li key={user.id} className="p-2 border-b">
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

export default UserList;