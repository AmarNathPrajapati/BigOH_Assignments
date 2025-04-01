import { useState } from "react";

function UserCard({ name, age }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Counter: {counter}</p>
      <button
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
}
export default UserCard;