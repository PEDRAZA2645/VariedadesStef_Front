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
    console.log(data);
  };

  return {
    formData,
    handleInputChange,
    handleRegister,
  };
};

export default useContact;