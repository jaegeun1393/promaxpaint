import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "./Layout//Header";
import Footer from "./Layout/Footer";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";

const App = () => {
  const [activeSection, setActiveSection] = useState();

  const handleNavClick = (sectionId) => {
    console.log('sectionId:', sectionId);
    setActiveSection(sectionId);
    console.log('activeSection:', activeSection);
    const section = document.querySelector(`#${activeSection}`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header onNavClick={handleNavClick}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
