import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex justify-content-between align-items-center border-bottom py-2"
        >
          <div className="d-flex align-items-center">
            <img src={pizza.img} width="60" />
            <span className="ms-2">{pizza.name}</span>
          </div>

          <div>
            <button
              className="btn btn-danger btn-sm me-2"
              onClick={() => decreaseQuantity(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-primary btn-sm ms-2"
              onClick={() => increaseQuantity(pizza.id)}
            >
              +
            </button>
          </div>

          <span>
            ${(pizza.price * pizza.count).toLocaleString()}
          </span>
        </div>
      ))}

      <h4 className="mt-4">
        Total: ${total.toLocaleString()}
      </h4>

      <button className="btn btn-success mt-2">
        Pagar
      </button>
    </div>
  );
};

export default Cart;