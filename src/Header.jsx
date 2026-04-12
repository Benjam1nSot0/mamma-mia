import headerImg from "./assets/Header.jpg";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
      }}
      className="d-flex flex-column justify-content-center align-items-center text-white"
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>Receta Italianisssima</p>
    </div>
  );
};

export default Header;