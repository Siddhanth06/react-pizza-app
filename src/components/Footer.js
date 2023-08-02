function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
      {isOpen ? (
        <p>
          We are open until 22:00 <strong>Do visit us or order online</strong>
        </p>
      ) : (
        <p>
          Sorry, we are <strong>closed</strong>. We are open from {openHour}:00
          PM to {closeHour}
          :00 PM
        </p>
      )}
    </div>
  );
}

export default Footer;
