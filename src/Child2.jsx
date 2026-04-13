import Child3 from "./Child3";

function Child2({ data }) {
  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h3>Child 2</h3>
      <Child3 data={data} />
    </div>
  );
}

export default Child2;