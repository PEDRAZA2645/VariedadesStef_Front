import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import login from "../assets/login.svg";
import carBuy from "../assets/CarBuy.svg";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems, validateCart } = useCart();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (isAuthenticated) {
        try {
          await validateCart();
        } catch (error) {
          console.error("Error al validar el carrito:", error);
        }
      }
    };
    fetchCartItems();
  }, [isAuthenticated]);

  const handleCartClick = async () => {
    if (isAuthenticated) {
      try {
        await validateCart();
        navigate("/cart");
      } catch (error) {
        console.error("Error al acceder al carrito:", error);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-between p-4 bg-tertiary shadow-md">
      <div className="flex-grow">
        <ol className="flex flex-wrap gap-4 justify-center text-black text-sm md:text-base">
        <div className="w-25 h-16 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/quienes-somos">¿Quiénes somos?</Link>
          </li>
          <li>
            <Link to="/contacto">Contáctenos</Link>
          </li>
          <li className="flex items-center">
            <img src={login} alt="Login" className="mr-1" />
            <Link to="/login">Login</Link>
          </li>
          <li className="relative">
            <button onClick={handleCartClick}>
              <img src={carBuy} alt="Ver carrito" />
              {isAuthenticated &&
                Array.isArray(cartItems) &&
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