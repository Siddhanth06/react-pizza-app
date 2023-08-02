function Header() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "4rem", color: "orange" }}>React Pizza App</h1>
      <span
        style={{
          display: "inline-block",
          fontSize: "2rem",
          borderTop: "0.5rem solid black",
          borderBottom: "0.5rem solid black",
          marginTop: "2rem",
        }}
      >
        Menu
      </span>
    </div>
  );
}

export default Header;
