import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import ChatwootWidget from "./chatwoot_widget";

import Header from "./Layout//Header";
import Footer from "./Layout/Footer";
import PageNotFound from "./Components/PageNotFound";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";

import Article_1 from "./articles/article1"
import Article_2 from "./articles/article2"
import Article_3 from "./articles/article3"
import Article_4 from "./articles/article4"


const App = () => {
  const [activeSection, setActiveSection] = useState();

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
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

        <Route path="/blog/article/1" element={<Article_1 />} />
        <Route path="/blog/article/2" element={<Article_2 />} />
        <Route path="/blog/article/3" element={<Article_3 />} />
        <Route path="/blog/article/4" element={<Article_4 />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ChatwootWidget />
    </>
  );
};

export default App;
