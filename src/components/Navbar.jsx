import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import login from "../assets/login.svg";
import carBuy from "../assets/CarBuy.svg";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart(); // Sin validateCart

  const handleCartClick = () => {
    navigate("/cart"); // Redirige al carrito
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-between p-4 bg-secundary shadow-md">
      <div className="flex-grow">
        <ol className="flex flex-wrap gap-4 justify-center text-black text-base">
          <div className="w-25 h-16 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <li className="flex items-center">
            <Link to="/">Inicio</Link>
          </li>
          <li className="flex items-center">
            <Link to="/products">Productos</Link>
          </li>
          <li className="flex items-center">
            <Link to="/quienes-somos">¿Quiénes somos?</Link>
          </li>
          <li className="flex items-center">
            <Link to="/contacto">Contáctenos</Link>
          </li>
          <li className="flex items-center">
            <img src={login} alt="Login" className="mr-1 h-5" />
            <Link to="/login">Login</Link>
          </li>
          <li className="relative flex items-center">
            <button onClick={handleCartClick}>
              <img src={carBuy} alt="Ver carrito" className="h-6" />
              {Array.isArray(cartItems) &&
                cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-black rounded-full px-1 text-xs">
                    {cartItems.length}
                  </span>
                )}
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;