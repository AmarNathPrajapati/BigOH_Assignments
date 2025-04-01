function ChildComponentUseCallback({ onClick }) {
  console.log("ChildComponent rendered!");
  return <button onClick={onClick}>Click Me</button>;
}

export default ChildComponentUseCallback;