import Child4 from "./Child4";

function Child3({ data }) {
  return (
    <div style={{ border: "2px solid orange", padding: "10px", marginTop: "10px" }}>
      <h3>Child 3</h3>
      <Child4 data={data} />
    </div>
  );
}

export default Child3;