import React, { useState, useEffect, useRef } from 'react';
import './LiveCounter.css';
import LogoSlider from "../LogoSlider/LogoSlider"

const LiveCounter = () => {
  const stats = [
    { id: 1, endValue: 1000000, title: 'Lives Touched', suffix: '+' },
    { id: 2, endValue: 400000, title: 'Customers Transformed', suffix: '+' },
    { id: 3, endValue: 18000, title: 'Success Stories', suffix: '+' },
    { id: 4, endValue: 750, title: 'Companies Served', suffix: '+' }
  ];

  const [counters, setCounters] = useState(
    stats.map(stat => ({ 
      ...stat, 
      currentValue: 0,
      progress: 0 
    }))
  );
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      cancelAnimation();
    };
  }, []);

  const startAnimation = () => {
    cancelAnimation();
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 5); // easeOutQuint

      setCounters(prev => 
        prev.map(stat => ({
          ...stat,
          currentValue: Math.floor(stat.endValue * easedProgress),
          progress: easedProgress * 100
        }))
      );

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const cancelAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const formatNumber = (num) => num.toLocaleString();

  return (
    <>
    <LogoSlider direction="right-to-left" />
    <div className="counter-container" ref={containerRef}>
      <div className="counter-grid">
        {counters.map((stat) => (
          <div key={stat.id} className="counter-card">
            <div className="counter-content">
              <div className="counter-value">
                <span className="number">{formatNumber(stat.currentValue)}</span>
                <span className="suffix">{stat.suffix}</span>
              </div>
              <div className="counter-title">{stat.title}</div>
            </div>
            <div className="counter-progress-container">
              <div 
                className="counter-progress-bar"
                style={{ width: `${stat.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <LogoSlider direction="left-to-right" />
    </>
  );
};

export default LiveCounter;