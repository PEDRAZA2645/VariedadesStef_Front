import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth.js";

const Login = () => {
  const [formData, message, handleInputChange, handleAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleAuth("login"); // Realiza el proceso de autenticación
      navigate("/products", { state: { showSuccess: true } }); // Redirige con información extra
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", error, {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* Contenedor principal para centrar todo */}
      <div className="flex justify-center items-center h-[400px] bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-auto max-w-md bg-sixth shadow-2xl rounded-sm p-6"
        >
          <div className="flex flex-col space-y-4">
            {/* Campo Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            {/* Campo Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            {/* Botón de Login */}
            <button
              type="submit"
              className="w-full h-[43px] md:h-[48px] btn-sixth"
            >
              Login
            </button>
          </div>
          {/* Enlaces abajo del formulario */}
          <div className="mt-4 text-center">
            <Link to="/reset-Password" className="text-black-500 hover:underline">
              ¿Olvidó su contraseña?
            </Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="/register" className="text-black-500 hover:underline">
              ¿No tienes cuenta? Regístrate
            </Link>
          </div>
          {/* Mensajes de error */}
          {message && <p className="text-red-500 mt-4 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;