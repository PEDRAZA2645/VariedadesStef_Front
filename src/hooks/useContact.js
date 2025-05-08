import { useState } from 'react';

const useContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (data) => {
    // Lógica para enviar los datos al servidor
    console.log(data); // Solo para verificar
  };

  return {
    formData,
    handleInputChange,
    handleRegister,
    // Otros datos y funciones que necesites
  };
};

export default useContact;