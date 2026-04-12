const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <div className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      
      <div>
        <button className="btn btn-outline-light me-2">🍕 Home</button>
        {token ? (
  <>
    <button className="btn btn-outline-light me-2">🔓 Profile</button>
    <button className="btn btn-outline-light me-2">🔒 Logout</button>
  </>
) : (
  <>
    <button className="btn btn-outline-light me-2">🔐 Login</button>
    <button className="btn btn-outline-light">🔐 Register</button>
  </>
)}
      </div>

      <div>
        <button className="btn btn-success">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>

    </div>
  );
};

export default Navbar;