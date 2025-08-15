import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import logo from "../assets/name-logo.jpg";
import { ImBrightnessContrast } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = ({ isLightMode, handleContrastClick }) => {
  const iconBaseClass = `text-2xl cursor-pointer transition-colors duration-500`;
  const iconColor = isLightMode ? "text-black" : "text-white";

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/+447979830667`, "_blank");
  };

  return (
    <div>
      {/* Background Animation */}
      <div className="relative z-0">
        <BackgroundAnimation />
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center px-4 md:px-10 py-4">
        <img
          src={logo}
          alt="Jaldeep Patel Logo"
          className="h-14 w-auto hover:scale-105 transition-transform duration-300"
        />

        <div className="flex items-center gap-6 md:gap-10">
          {/* Contrast Toggle */}
          <ImBrightnessContrast
            onClick={handleContrastClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleContrastClick()}
            className={`${iconBaseClass} ${iconColor} hover:text-yellow-400`}
            title="Toggle Contrast"
            aria-label="Toggle Light/Dark Mode"
          />

          {/* Phone Icon */}
          <a
            href="tel:+447979830667"
            title="Call +44 7979 830667"
            aria-label="Call Jaldeep"
          >
            <FiPhone
              className={`${iconBaseClass} ${iconColor} hover:text-green-400`}
            />
          </a>

          {/* WhatsApp Icon */}
          <FaWhatsapp
            onClick={handleWhatsappClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleWhatsappClick()}
            className={`${iconBaseClass} ${iconColor} hover:text-green-600`}
            title="Send WhatsApp Message"
            aria-label="Send WhatsApp Message"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
