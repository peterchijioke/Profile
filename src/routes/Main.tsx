import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
