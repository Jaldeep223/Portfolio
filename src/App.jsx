import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLightMode]);

  const handleContrastClick = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={`transition-colors duration-500 ${isLightMode ? "bg-white text-black" : "bg-black text-white"}`}>
      {/* Pass down handler and mode to components that need toggle */}
      <Navbar isLightMode={isLightMode} handleContrastClick={handleContrastClick}/>
      <Home isLightMode={isLightMode} handleContrastClick={handleContrastClick} />
      <Work isLightMode={isLightMode} />
      <Contact isLightMode={isLightMode} />
      <Footer isLightMode={isLightMode} />
    </div>
  );
};

export default App;
