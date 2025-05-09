import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-center h-[400px] bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-auto max-w-md bg-sixth shadow-2xl rounded-sm p-6"
        >
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <button
              type="submit"
              className="w-full h-[43px] md:h-[48px] btn-sixth"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link
              to="/reset-Password"
              className="text-black-500 hover:underline"
            >
              ¿Olvidó su contraseña?
            </Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="/register" className="text-black-500 hover:underline">
              ¿No tienes cuenta? Regístrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
