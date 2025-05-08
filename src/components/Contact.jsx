import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useContact from "../hooks/useContact"; // Asegúrate de que la ruta sea correcta

const Contact = () => {
  const {
    formData,
    handleInputChange,
    handleRegister,
    successMessage,
    errorMessage,
  } = useContact();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { ...formData, status: 1 }; // Status siempre será 1

    try {
      await handleRegister(dataToSend);
      navigate("/contacto"); // Redirige a la ruta /contacto después de enviar el formulario
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al enviar el formulario. Inténtalo de nuevo.", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (successMessage) {
      setShowSuccessMessage(true);
      toast.success("Formulario enviado con éxito!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }, [successMessage]);

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-center h-[430px] bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-auto max-w-md bg-sixth shadow-2xl rounded-sm p-6"
        >
          <div className="flex flex-col space-y-4">
            {/* Campo Nombre */}
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            {/* Campo Apellido */}
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            {/* Campo Teléfono */}
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
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
            {/* Campo Mensaje */}
            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleInputChange}
              className="input-primary w-full h-[48px] px-3"
              required
            />
            {/* Botón Enviar */}
            <button
              type="submit"
              className="w-[193px] h-[43px] md:w-[360px] md:h-[48px] btn-sixth"
            >
              Enviar
            </button>
          </div>
          {/* Mensajes de error o de éxito */}
          {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
          {showSuccessMessage && (
            <div className="text-green-500 mt-4">
              Formulario enviado con éxito!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;