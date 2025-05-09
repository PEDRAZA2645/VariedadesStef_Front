import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  return (
    <div className="flex justify-center items-center h-[400px] bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="w-auto max-w-md bg-sixth shadow-2xl rounded-sm p-6"
      >
        <h2 className="text-xl mb-2">Reset Password</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input-primary mb-2"
          required
        />
        <button
          type="submit"
          className="w-[193px] h-[43px] md:w-[360px] md:h-[48px] btn-sixth"
        >
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
