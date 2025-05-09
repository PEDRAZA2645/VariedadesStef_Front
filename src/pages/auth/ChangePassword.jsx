import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
  return (
    <div className="flex justify-center items-center h-[400px] bg-gray-100">
      <ToastContainer />
      {/* Formulario para enviar el correo de restablecimiento */}
      <form
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

      {/* Formulario para cambiar la contraseña */}
      <form
        className="container md:w-[518px] md:h-[500px] w-[306px] h-[464px] bg-fourty shadow-2xl rounded-sm text-sm md:text-xl anyBox flex flex-col justify-center items-center"
      >
        <h2 className="text-xl mb-2">Change Password</h2>
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          className="input-primary mb-2"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          className="input-primary mb-2"
          required
        />
        <p style={{ color: 'red', display: 'none' }}>Passwords do not match!</p>
        <button
          type="submit"
          className="w-[193px] h-[43px] md:w-[360px] md:h-[48px] btn-primary"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;