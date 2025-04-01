import React, { useState } from "react";
import "./SuccessHexagon.css";
import knowledgePhoto from "../../../assets/hexagon/knowledge.png";
import creativityPhoto from "../../../assets/hexagon/creativity.png";
import attitudePhoto from "../../../assets/hexagon/attitude.png";
import skillsPhoto from "../../../assets/hexagon/skills.png";
import habitsPhoto from "../../../assets/hexagon/habits.png";
import strategiesPhoto from "../../../assets/hexagon/strategies.png";



// Updated labels with image URLs
const labels = [
  { 
    title: "Knowledge", 
    description: "What we know about the world & ourselves.",
    image: knowledgePhoto
  },
  { 
    title: "Attitude", 
    description: "What & how we feel about what we know.",
    image: attitudePhoto
  },
  { 
    title: "Skills", 
    description: "What we can do with what we know.",
    image: skillsPhoto
  },
  { 
    title: "Habits", 
    description: "A behavior that is repeated.",
    image: habitsPhoto
  },
  { 
    title: "Strategies", 
    description: "What we consciously plan to change.",
    image: strategiesPhoto
  },
  { 
    title: "Creativity", 
    description: "What we develop create or improvise.",
    image: creativityPhoto
  },
];

const SuccessHexagon = () => {
  const [selected, setSelected] = useState(labels[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (label, index) => {
    setSelected(label);
    setActiveIndex(index);
  };

  return (
    <>
      <br />
      <h1 className="title">The Success Hexagon</h1>
      <div className="success-container">
        {/* Left Side - Description with Image Background */}
        <div 
          className="description-box"
          style={{ backgroundImage: `url(${selected.image})` }}
        >
          <div className="description-overlay">
            <h2 className="description-title">{selected.title}</h2>
            <p className="description-text">{selected.description}</p>
          </div>
        </div>

        {/* Right Side - Connected Hexagon Labels */}
        <div className="hexagon-connector-container">
          <svg className="connectors" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
            <line x1="200" y1="50" x2="300" y2="125" className="connector-line" />
            <line x1="300" y1="125" x2="300" y2="225" className="connector-line" />
            <line x1="300" y1="225" x2="200" y2="300" className="connector-line" />
            <line x1="200" y1="300" x2="100" y2="225" className="connector-line" />
            <line x1="100" y1="225" x2="100" y2="125" className="connector-line" />
            <line x1="100" y1="125" x2="200" y2="50" className="connector-line" />
          </svg>

          <div className="hexagon-labels">
            {labels.map((label, index) => (
              <div
                key={index}
                className={`hex-label label-${index + 1} ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => handleHover(label, index)}
              >
                <span>{label.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessHexagon;