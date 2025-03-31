import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
        <div className="left-section">
            <div className="logo">
                smmart
            </div>
        </div>

        <div className="middle-section">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Blog</a>
            <a href="">Merchantdise</a>
        </div>

        <div className="right-section">
            
        </div>
      
    </nav>
  );
};

export default Navbar;