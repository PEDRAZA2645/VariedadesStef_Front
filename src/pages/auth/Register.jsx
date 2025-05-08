import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRegister from "../../hooks/useRegister";

const Register = () => {
  const {
    formData,
    passwordsMatch,
    handleInputChange,
    validatePasswords,
    handleRegister,
    successMessage,
    errorMessage,
  } = useRegister();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister();
  };

  useEffect(() => {
    if (successMessage) {
      setShowSuccessMessage(true);
      toast.success("User successfully registered! Redirecting to login..", {
        position: "top-center",
        autoClose: 3000,
      });

      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-auto max-w-md bg-tertiary shadow-2xl rounded-sm p-6"
        >
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Password"
              value={formData.newPassword}
              onChange={handleInputChange}
              onBlur={validatePasswords}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              onBlur={validatePasswords}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            {!passwordsMatch && (
              <p className="text-red-500">Passwords do not match!</p>
            )}
            <button
              type="submit"
              className="w-[193px] h-[43px] md:w-[360px] md:h-[48px] btn-fourth"
            >
              {successMessage ? "Enviado" : "Enviar"}
            </button>
            {errorMessage && (
              <div className="text-red-500 mt-4">{errorMessage}</div>
            )}
            {showSuccessMessage && (
              <div className="text-green-500">Usuario registrado con éxito!</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;