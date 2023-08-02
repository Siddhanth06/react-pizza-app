function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <>
      <li
        style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}
        className={soldOut ? "grey-content" : ""}
      >
        <div>
          <img src={photoName} alt="pizza" width="60" />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{ingredients}</p>
          <p>{soldOut ? "Sold Out" : <p>${price}</p>}</p>
        </div>
      </li>
    </>
  );
}

export default Pizza;
