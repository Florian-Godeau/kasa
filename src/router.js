import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter utilise la gestion des URL du navigateur
import Home from "./pages/home";
import About from "./pages/about";
import Accomodations from "./pages/accommodations";
import Error from "./pages/error";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodations />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;