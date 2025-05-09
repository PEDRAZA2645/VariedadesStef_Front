import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[430px] bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-auto max-w-md bg-sixth shadow-2xl rounded-sm p-6"
        >
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              className="input-primary w-full h-[48px] px-3"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
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
            <textarea
              name="message"
              placeholder="Mensaje"
              className="input-primary w-full h-[100px] px-3"
              required
            />
            <button
              type="submit"
              className="w-[193px] h-[43px] md:w-[360px] md:h-[48px] btn-sixth"
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