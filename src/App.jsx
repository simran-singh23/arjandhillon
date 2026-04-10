import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Agriculture from "./pages/Agriculture";
import Commercial from "./pages/Commercial";
import Residential from "./pages/Residential";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/residential" element={<Residential />} />
      </Routes>
    </Router>
  );
}

export default App;
