import Child5 from "./Child5";

function Child4({ data }) {
  return (
    <div style={{ border: "2px solid purple", padding: "10px", marginTop: "10px" }}>
      <h3>Child 4</h3>
      <Child5 data={data} />
    </div>
  );
}

export default Child4;