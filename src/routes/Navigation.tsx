import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "../pages/screens/Hero/HeroSection";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
