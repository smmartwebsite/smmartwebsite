import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import welcomeVideo from "../../../assets/welcomeBackgroundVideo.mp4";
import "./Welcome.css";

const Welcome = () => {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState("");
  const fullText = "smmart – True school for entrepreneurs.";

  useEffect(() => {
    setShowContent(true);
    
    const typingTimer = setTimeout(() => {
      let currentIndex = 0;
      const typingSpeed = 50;

      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, 500);

    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <div className="welcome">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={welcomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="video-overlay">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="hero-text"
          >
            {text}
            {showContent && text.length < fullText.length && (
              <span className="cursor">|</span>
            )}
          </motion.h1>
          
          <motion.div
            className="button-wrapper"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: text === fullText ? 1 : 0,
              y: text === fullText ? 0 : 10
            }}
            transition={{ 
              delay: text === fullText ? 0.3 : 0,
              duration: 0.5 
            }}
          >
            <button className="cta-button">
              Start now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;