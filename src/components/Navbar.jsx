import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import facebookLogo from "../assets/socials/facebook.png";
import instagramLogo from "../assets/socials/instagram.png";
import twitterLogo from "../assets/socials/twitter.png";
import youtubeLogo from "../assets/socials/youtube.png";
import linkedinLogo from "../assets/socials/linkedin.png";
import telephoneLogo from "../assets/socials/telephone.png";
import emailLogo from "../assets/socials/email.png";


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <b>
            <span style={{ color: "#646cff" }}>smm</span>art
          </b>
        </div>
      </div>

      <div className="middle-section">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/merchandise">Merchandise</Link>
      </div>

      <div className="right-section">
        <div className={`menu-icon ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          {menuActive ? "✖" : "☰"}
        </div>
      </div>


      

      {/* Overlay Menu */}
      <div className={`overlay ${menuActive ? "active" : ""}`}>
        <div className="menu-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link to="/merchandise" onClick={toggleMenu}>Tools</Link>
        </div>

        <div className="side-container">
          <iframe
            className="nav-youtube"
            src="https://www.youtube.com/embed/XFoPM9JJhhw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
            <div className="nav-video-title"><b>How to be successful? Who will empower us? - Hindi</b></div>
            <div className="latest-video">Latest Video</div>
            <br></br>
            <div className="video-date">31st March 2025</div>
        </div>


      
        <div className="socials">
          <div className="social-media">
            <a href="https://www.facebook.com/SMMART"><img src={facebookLogo} alt="Facebook" /></a>
            <a href="https://x.com/smmartParivaar"><img src={twitterLogo} alt="Twitter" /></a>
            <a href="https://in.linkedin.com/company/smm-art-training-consultancy-services-pvt-ltd"><img src={linkedinLogo} alt="LinkedIn" /></a>
            <a href="https://www.instagram.com/smmart_parivaar/"><img src={instagramLogo} alt="Instagram" /></a>
            <a href="https://www.youtube.com/@smmartbuzz"><img src={youtubeLogo} alt="YouTube" /></a>
            <a href="tel:+918451051500"><img src={telephoneLogo} alt="Telephone" /></a>
            <a href="mailto:info@smmart.co.in"><img src={emailLogo} alt="Email" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
