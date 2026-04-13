import Child1 from "./Child1";

function Parent() {
  const message = "Hello from Parent Component 🚀";

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h2>Parent Component</h2>
      <Child1 data={message} />
    </div>
  );
}

export default Parent;