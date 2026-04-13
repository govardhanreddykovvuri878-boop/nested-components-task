import Child2 from "./Child2";

function Child1({ data }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginTop: "10px" }}>
      <h3>Child 1</h3>
      <Child2 data={data} />
    </div>
  );
}

export default Child1;