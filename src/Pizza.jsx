import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data));
  }, []);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ width: "24rem" }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />

        <div className="card-body">
          <h3 className="card-title text-center">{pizza.name}</h3>

          <p>{pizza.desc}</p>

          <p><strong>Ingredientes:</strong></p>
          <ul>
            {pizza.ingredients.map((ing, index) => (
              <li key={index}>🍕 {ing}</li>
            ))}
          </ul>

          <p className="text-center">
            <strong>Precio: ${pizza.price.toLocaleString()}</strong>
          </p>

          <button className="btn btn-success w-100">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;