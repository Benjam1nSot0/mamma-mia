import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>

        <p><strong>Ingredientes:</strong></p>

        <ul>
          {ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        <p className="text-center">
          <strong>Precio: ${price.toLocaleString()}</strong>
        </p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">
            Ver más
          </button>

          <button
            className="btn btn-success"
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                img,
              })
            }
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;