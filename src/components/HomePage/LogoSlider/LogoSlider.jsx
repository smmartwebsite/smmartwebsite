import React, { useEffect, useState, useRef } from 'react';
import './LogoSlider.css';

// Import all logos from assets
import logo1 from "../../../assets/logos/logo1.png";
import logo2 from "../../../assets/logos/logo2.png";
import logo3 from "../../../assets/logos/logo3.png";
import logo4 from "../../../assets/logos/logo4.png";
import logo5 from "../../../assets/logos/logo5.png";
import logo6 from "../../../assets/logos/logo6.png";
import logo7 from "../../../assets/logos/logo7.png";

const LogoSlider = ({ direction = 'right-to-left' }) => {
  const logoImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const requestRef = useRef();
  const [items, setItems] = useState([]);
  const [speed] = useState(1);

  useEffect(() => {
    // Double the items for seamless looping
    setItems([...logoImages, ...logoImages]);
  }, [logoImages]);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    let progress = 0;
    const sliderWidth = sliderRef.current.scrollWidth / 2;
    const containerWidth = containerRef.current.offsetWidth;
    let lastTimestamp = performance.now();

    const animate = (timestamp) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (direction === 'left-to-right') {
        progress += speed * (delta / 16); // Normalize speed
        if (progress >= 0) progress = -sliderWidth;
      } else {
        progress -= speed * (delta / 16); // Normalize speed
        if (progress <= -sliderWidth) progress = 0;
      }

      sliderRef.current.style.transform = `translateX(${progress}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [direction, items.length, speed]);

  return (
    <div className="logo-slider" ref={containerRef}>
      <div className="logo-container" ref={sliderRef}>
        {items.map((src, index) => (
          <div className="logo-item" key={index}>
            <img src={src} alt={`Logo ${index % logoImages.length + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;