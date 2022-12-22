import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Education from "../pages/Education/Education";
import Projects from "../pages/Projects/Projects";
import Research from "../pages/Research/Research";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/research" element={<Research />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  );
}
