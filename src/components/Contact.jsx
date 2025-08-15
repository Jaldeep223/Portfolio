import React, { useState } from 'react';
import Connect from '../assets/connect.avif';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Contact = ({ isLightMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(prev => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form data submitted:', formData);
      alert('Thank you for contacting us!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div
      className={`
        min-h-screen w-full p-8 pt-6 pb-16
        transition-colors duration-500
        ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}
      `}
    >
      {/* Centered Connect Button */}
      <div className="flex justify-center mb-12">
        <button
          className={`
            font-semibold px-6 py-3 rounded-md shadow-md transition-colors duration-500
            ${isLightMode ? 'bg-blue-400 text-black hover:bg-blue-600' : 'bg-[#1788AE] text-white hover:bg-blue-700'}
          `}
        >
          Let's Connect
        </button>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl mx-auto mt-15">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={Connect}
            alt="connect"
            className="w-full h-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className={`
            md:w-1/2 flex flex-col gap-6 p-8 rounded-lg shadow-inner
            transition-colors duration-500
            ${isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}
          `}
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <div className="flex items-center rounded-md px-3 py-2 transition-colors duration-500"
              style={{ backgroundColor: isLightMode ? '#fff' : '#1f2937' }}
            >
              <FaUser className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} mr-3`} />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className={`
                  flex-grow outline-none transition-colors duration-500
                  ${isLightMode ? 'text-black bg-white' : 'text-white bg-gray-800'}
                `}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 ml-10">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <div className="flex items-center rounded-md px-3 py-2 transition-colors duration-500"
              style={{ backgroundColor: isLightMode ? '#fff' : '#1f2937' }}
            >
              <FaEnvelope className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} mr-3`} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`
                  flex-grow outline-none transition-colors duration-500
                  ${isLightMode ? 'text-black bg-white' : 'text-white bg-gray-800'}
                `}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 ml-10">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <div className="flex items-start rounded-md px-3 py-2 transition-colors duration-500"
              style={{ backgroundColor: isLightMode ? '#fff' : '#1f2937' }}
            >
              <FaCommentDots className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} mt-2 mr-3`} />
              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                className={`
                  flex-grow outline-none resize-none transition-colors duration-500
                  ${isLightMode ? 'text-black bg-white' : 'text-white bg-gray-800'}
                `}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 ml-10">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`
              py-3 rounded-md font-semibold transition-colors duration-500
              ${isLightMode ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-[#1788AE] hover:bg-blue-700 text-white'}
            `}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
