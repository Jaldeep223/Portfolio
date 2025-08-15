import React from "react";
import Laptop from "../assets/laptop.avif";
import Insta from "../assets/instaClone.png";
import PortfolioImg from "../assets/portfolio.png";
import EcommerceImg from "../assets/ecommerce.png";

const projects = [
  {
    title: "E-Commerce Clothing Store",
    description:"A modern e-commerce website for men's, women's, and kids' fashion. Built with React.js and Stripe payment integration.",
    technologies: ["#React.js", "#Tailwind CSS", "#JavaScript"],
    link: "https://jaldeep223.github.io/Ecommerce",
    image: EcommerceImg,
    layout: "right",
  },
  {
    title: "Instagram Clone",
    description: "A fully responsive Instagram UI clone built using React.js, Tailwind CSS, and Firebase authentication. Mobile-first, then desktop layout.",
    technologies: ["#React.js", "#Tailwind CSS", "#JavaScript"],
    link: "https://jaldeep223.github.io/Instagram-Clone",
    image: Insta,
    layout: "left", // Mobile-first layout, content on left, image on right
  },
  {
    title: "Portfolio Website",
    description:"My personal portfolio website showcasing my work, skills, and contact information. Designed with animations and responsive layout.",
    technologies: ["#React.js", "#Tailwind CSS", "#Framer Motion", "#JavaScript"],
    link: "https://jaldeep223.github.io/Portfolio",
    image: PortfolioImg,
    layout: "right",
  },
];

const Work = ({ isLightMode }) => {
  return (
    <div
      className={`min-h-screen py-10 px-4 sm:px-8 md:px-16 lg:px-24 ${
        isLightMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-[#4595EB]">
        My Work
        <hr className="my-8 w-30 border-t-4 border-gray-400 dark:border-gray-600 mx-auto" />
      </h2>

      {projects.map((project, index) => {
        const isInstagram = project.title === "Instagram Clone";

        let contentOrderClass;
        let imageOrderClass;

        if (isInstagram) {
          // Mobile: image first, content second
          // Desktop: content left (order 1), image right (order 2)
          contentOrderClass = "order-2 md:order-1";
          imageOrderClass = "order-1 md:order-2";
        } else if (project.layout === "left") {
          contentOrderClass = "order-2 md:order-1";
          imageOrderClass = "order-1 md:order-2";
        } else {
          // layout right
          contentOrderClass = "order-2 md:order-2";
          imageOrderClass = "order-1 md:order-1";
        }

        return (
          <div
            key={index}
            className="grid md:grid-cols-2 items-center gap-6 sm:gap-10 lg:gap-20 mb-16"
          >
            {/* Content */}
            <div
              className={`${contentOrderClass} flex flex-col justify-center gap-4 text-center md:text-left`}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${
                      isLightMode
                        ? "border-black text-black"
                        : "border-white text-white"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isLightMode ? "text-blue-600" : "text-[#4595EB]"
                } hover:underline font-semibold`}
              >
                View Project →
              </a>
            </div>

            {/* Image */}
            <div className={`${imageOrderClass} flex justify-center`}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-xl shadow-2xl"
              >
                {/* Laptop Frame */}
                <img
                  src={Laptop}
                  alt="Laptop Frame"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Project Screenshot */}
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="absolute left-[17%] top-[15%] w-[66%] h-[70%] rounded-lg object-contain border border-black shadow-md pointer-events-none"
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
