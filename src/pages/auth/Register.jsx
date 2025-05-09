import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-center h-[500px] bg-gray-100">
        <form className="w-auto max-w-md bg-sixth shadow-2xl rounded-sm p-6">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Password"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <p className="text-red-500" style={{ display: "none" }}>
              Passwords do not match!
            </p>
            <button
              type="submit"
              className="w-[193px] h-[43px] md:w-[360px] md:h-[48px] btn-sixth"
            >
              Enviar
            </button>
            <div className="text-red-500 mt-4" style={{ display: "none" }}>
              Error message
            </div>
            <div className="text-green-500" style={{ display: "none" }}>
              Usuario registrado con éxito!
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;