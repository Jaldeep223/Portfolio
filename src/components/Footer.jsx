import React from 'react'
import Logo from '../assets/name-logo.jpg'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = ({ isLightMode }) => {
  return (
    <div
      className={`
        flex flex-col justify-center items-center
        transition-colors duration-500
        ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}
      `}
    >
      <p className={`${isLightMode ? 'text-black' : 'text-white'} mb-6`}>

        jaldeep patel @ 2025
      </p>
      
      <img src={Logo} alt="logo" className="h-20" />
      
      <div className="flex gap-6 mb-10 mt-4">
        <a
          href="https://www.linkedin.com/in/jaldeep-patel-b6118783/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            className={`
              cursor-pointer text-xl transition
              ${isLightMode ? 'text-black hover:text-blue-500' : 'text-white hover:text-blue-500'}
            `}
          />
        </a>

        <a
          href="https://www.instagram.com/jaldeep223/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram
            className={`
              cursor-pointer text-xl transition
              ${isLightMode ? 'text-black hover:text-pink-600' : 'text-white hover:text-pink-500'}
            `}
          />
        </a>

        <a href="mailto:pateljaldeep266@gmail.com" aria-label="Email">
          <HiOutlineMail
            className={`
              cursor-pointer text-xl transition
              ${isLightMode ? 'text-black hover:text-yellow-500' : 'text-white hover:text-yellow-300'}
            `}
          />
        </a>
      </div>
    </div>
  )
}

export default Footer

