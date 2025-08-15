import React from "react";
import Jlogo from "../assets/j-logo.jpg";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaChevronDown } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import AboutMeButton from "./AboutMeButton";

const Home = ({ isLightMode }) => {
  const textColor = isLightMode ? "text-black" : "text-white";
  const bgColor = isLightMode ? "bg-white" : "bg-black";
  const buttonColor = isLightMode
    ? "bg-blue-200 hover:bg-blue-400"
    : "bg-blue-200 hover:bg-blue-400";
  const verticalLineColor = isLightMode ? "bg-black" : "bg-blue-200";
  const chevronColor = isLightMode ? "text-black" : "text-blue-200";

  return (
    <div className={`${bgColor} ${textColor} min-h-screen`}>
      {/* Hero Section */}
      <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-2 max-w-full w-full">
          {/* Text */}
          <div className="text-center md:text-left max-w-xs md:max-w-md mb-6 md:mb-0">
            <h1 className={`text-4xl font-semibold ${textColor}`}>
              𝓙𝓪𝓵𝓭𝓮𝓮𝓹 𝓟𝓪𝓽𝓮𝓵
            </h1>
            <p className="text-xl mt-4">Software Developer</p>
            <AboutMeButton />
          </div>

          {/* Image */}
          <div className="flex-grow w-full md:w-auto md:-ml-4">
            <img
              src={Jlogo}
              alt="Jaldeep Patel"
              loading="lazy"
              className="h-[40vh] md:h-[80vh] w-auto shadow-lg object-contain mx-auto bg-transparent"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row md:flex-col gap-6 mt-6 md:mt-0 md:ml-12">
          <a
            href="https://www.linkedin.com/in/jaldeep-patel-b6118783/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn
              className={`text-3xl cursor-pointer hover:text-blue-500 transition-colors duration-500 ${textColor}`}
            />
          </a>

          <a
            href="https://www.instagram.com/jaldeep223/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              className={`text-3xl cursor-pointer hover:text-pink-500 transition-colors duration-500 ${textColor}`}
            />
          </a>

          <a
            href="mailto:pateljaldeep266@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <HiOutlineMail
              className={`text-3xl cursor-pointer hover:text-yellow-300 transition-colors duration-500 ${textColor}`}
            />
          </a>

          <a
            href="https://github.com/Jaldeep223"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IoLogoGithub
              className={`text-3xl cursor-pointer hover:text-yellow-300 transition-colors duration-500 ${textColor}`}
            />
          </a>
        </div>
      </div>

      {/* Projects Button & Down Arrow */}
      <div className="text-center mt-10 flex flex-col items-center relative z-10">
        <a href="#projects">
          <button
            className={`px-6 py-2 rounded text-black font-semibold transition-colors duration-300 ${buttonColor}`}
          >
            Projects
          </button>
        </a>

        {/* Vertical small line */}
        <div className={`w-1 h-6 my-2 rounded-full ${verticalLineColor}`} />

        <a href="#projects">
          <FaChevronDown
            className={`text-3xl animate-bounce ${chevronColor}`}
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
