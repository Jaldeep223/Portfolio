import React, { useState } from "react";
import skills from "../assets/skills.jpg";

const AboutMeButton = ({ isLightMode }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="mt-8 bg-[#4595EB] text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-500 ease-in-out"
      >
        About Me
      </button>

      {showInfo && (
        <>
          {/* Overlay */}
          <div
            onClick={handleClick}
            className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-500 ease-in-out"
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 transition-opacity duration-500 ease-in-out">
            <div
              className={`relative rounded-lg shadow-lg w-full max-w-7xl p-10 overflow-y-auto max-h-[80vh] flex flex-col md:flex-row gap-12
                ${
                  isLightMode
                    ? "bg-white text-black"
                    : "bg-gray-900 text-white"
                } transition-colors duration-500 ease-in-out
              `}
            >
              {/* Close Icon top-right */}
              <button
                onClick={handleClick}
                aria-label="Close modal"
                className={`absolute top-4 right-4 p-2 rounded-full focus:outline-none transition-colors duration-300 ease-in-out
                  ${
                    isLightMode
                      ? "text-black hover:bg-gray-200"
                      : "text-white hover:bg-gray-700"
                  }
                `}
              >
                {/* SVG Close Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Left side: Text content */}
              <div className="flex-1 overflow-auto">
                <h2 className="text-3xl font-bold mb-6">PROFILE</h2>
                <p className="mb-8 leading-relaxed">
                  Aspiring Frontend Developer with a strong foundation in
                  Organic Chemistry transitioning into web development.
                  Proficient in HTML, CSS, JavaScript, React.js, and modern
                  UI/UX practices. Built responsive, interactive web
                  applications through hands-on projects. Known for being
                  detail-oriented, highly adaptable, and committed to
                  continuous learning and innovation in modern frontend
                  technologies.
                </p>

                <h2 className="text-3xl font-bold mb-6">SKILLS</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript (ES6+)",
                    "React.js",
                    "Bootstrap",
                    "Tailwind CSS",
                    "jQuery",
                    "Git",
                    "GitHub",
                    "VS Code",
                    "RESTful APIs",
                    "MySQL (basic)",
                    "Responsive Design",
                    "UI/UX Best Practices",
                    "SEO Optimization",
                    "Debugging and Troubleshooting",
                    "Cross-Browser Compatibility",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`border px-3 py-1 rounded-full text-sm font-medium transition-colors duration-500 ease-in-out ${
                        isLightMode
                          ? "border-black text-black"
                          : "border-white text-white"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side: Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={skills}
                  alt="About Me"
                  className="rounded-lg shadow-lg max-h-[70vh] object-contain"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutMeButton;

