import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-sixth shadow-2xl rounded-sm p-6"
        >
          <h2 className="text-xl mb-4 text-center">Reset Password</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full h-[48px] px-3"
              required
            />
            <button
              type="submit"
              className="w-full h-[48px] btn-sixth text-sm"
            >
              Send Reset Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;