import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-6">
      <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-400" : ""}
      
      >Home</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? "text-yellow-400" : ""}>



      About</NavLink>
      
      <NavLink to="/contact" className={({isActive}) => isActive ? "text-yellow-400" : ""}>

      Contact</NavLink>
    </nav>
  );
}

export default Navbar;