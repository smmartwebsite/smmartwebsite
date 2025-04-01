import React, { useState } from 'react';
import './Footer.css';
import { 
  FaArrowUp, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaEnvelope,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [showContactCard, setShowContactCard] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaYoutube />, name: 'YouTube', url: '#', color: '#FF0000' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#', color: '#0077B5' },
    { icon: <FaFacebookF />, name: 'Facebook', url: '#', color: '#4267B2' },
    { icon: <FaInstagram />, name: 'Instagram', url: '#', color: '#E1306C' },
    { icon: <FaGithub />, name: 'GitHub', url: '#', color: '#333' }
  ];

  return (
    <footer className="dynamic-footer">
      <div className="footer-wrapper">
        {/* Floating contact bubble */}
        <motion.div 
          className="contact-bubble"
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowContactCard(!showContactCard)}
        >
          <FaEnvelope />
        </motion.div>

        {showContactCard && (
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h4>Contact SMMART</h4>
            <p><FaPhone /> +91 84510 51500</p>
            <p><FaPhone /> +91 84510 51531</p>
            <p><FaEnvelope /> info@smmart.co.in</p>
          </motion.div>
        )}

        {/* Main Content */}
        <div className="footer-grid">
          {/* Brand Section with animated logo */}
          <div className="footer-section">
            <motion.h2 
              className="footer-brand"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              SMMART
            </motion.h2>
            <p className="brand-tagline">Digital Innovation at Its Peak</p>
            
            {/* Animated social links */}
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ '--social-color': social.color }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.2,
                    backgroundColor: social.color
                  }}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  {social.icon}
                  {hoveredSocial === index && (
                    <motion.span 
                      className="social-tooltip"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {social.name}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Address Section with map icon animation */}
          <div className="footer-section">
            <motion.h3 
              className="section-title"
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt className="title-icon" /> Our Offices
            </motion.h3>
            <motion.div 
              className="address-card"
              whileHover={{ scale: 1.02 }}
            >
              <p>F-Wing, 701/702, 7th Floor</p>
              <p>Remi Bizcourt, Off Veera Desai Road</p>
              <p>Opposite Supreme Chambers</p>
              <p>Andheri West, Mumbai – 400 053</p>
              <p className="cities">Mumbai | Surat | Rajkot</p>
            </motion.div>
          </div>

          {/* Quick Links with hover effects */}
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="links-list">
              <motion.li whileHover={{ x: 5 }}><a href="#">Home</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#">Services</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#">Case Studies</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#">About Us</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#">Careers</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#">Blog</a></motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with animated scroll button */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SMMART. All rights reserved.</p>
          <motion.button 
            className="scroll-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>

      {/* Animated gradient decorator */}
      <motion.div 
        className="footer-decor"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </footer>
  );
};

export default Footer;