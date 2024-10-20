import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Import toast
import { HashLoader } from 'react-spinners'; // Import HashLoader

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post('https://dilpreetsinghportfolio-api.onrender.com', formData);
      toast.success(response.data.msg);
      setFormData({ username: '', email: '', message: '' }); 
    } catch (error) {
      toast.error(error.response?.data?.msg || 'An error occurred. Please try again.'); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact_form">
      <label>
        <FaUser className="form_icon" />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </label>
      <label>
        <FaEnvelope className="form_icon" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </label>
      <label>
        <FaComment className="form_icon" />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </label>

        <p className='message_count'>*Just a friendly reminder: You can submit a maximum of 5 messages per email.</p>
      <button type="submit" disabled={loading}> 
        {loading ? <HashLoader size={20} color="#fff" /> : "Submit"} 
      </button>
    </form>
  );
};

export default Form;
