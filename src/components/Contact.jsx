import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Contenedor principal del formulario */}
      <div className="flex justify-center items-center flex-grow">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-sixth shadow-2xl rounded-lg p-6"
        >
          <h2 className="text-xl mb-4 text-center">Contáctanos</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full h-[48px] px-3"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              className="w-full h-[48px] px-3"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              className="w-full h-[48px] px-3"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-[48px] px-3"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              className="w-full h-[100px] px-3"
              required
            />
            <button
              type="submit"
              className="w-full h-[48px] btn-sixth text-sm"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;