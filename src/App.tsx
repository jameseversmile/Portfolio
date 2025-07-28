// import React from 'react'
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "../public/projects";
// import bgImage from "../src/assets/bg.png";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <div
      className="max-w-[1028px] mx-auto relative"
      style={{ backgroundImage: `url(/bg.png)` }}
    >
      <div />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact.me" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
