function Child5({ data }) {
  return (
    <div style={{ border: "2px solid red", padding: "10px", marginTop: "10px" }}>
      <h3>Child 5 (Final Component)</h3>
      <p><strong>Received Data:</strong> {data}</p>
    </div>
  );
}

export default Child5;