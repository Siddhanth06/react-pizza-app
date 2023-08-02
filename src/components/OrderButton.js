function OrderButton() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button
        style={{
          border: "none",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          backgroundColor: "orange",
          fontWeight: "bold",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
      >
        Order
      </button>
    </div>
  );
}

export default OrderButton;
