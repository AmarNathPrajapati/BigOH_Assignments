import { useState, useCallback } from "react";

function ParentComponentUseCallback() {
  const [count, setCount] = useState(0);

  // useCallback will memoize handleClick, so ChildComponent won't re-render unnecessarily
  const handleClick = useCallback(() => {
    console.log("Button Clicked!");
  }, []);

  return (
    <div className="p-4">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="p-2 bg-blue-500 text-white rounded">Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default ParentComponentUseCallback;