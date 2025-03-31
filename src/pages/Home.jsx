import React from "react";
import "./Home.css";
import welcomeVideo from "../assets/welcomeBackgroundVideo.mp4"

const Home = () => {
  return (
    <>

    <section className="welcome">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={welcomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="video-overlay">
          <h1>smmart – True school for entrepreneurs.</h1>
          <button>Start now</button>
      </div>
    </section>

    <h1>Hello World!</h1>

    </>
  )
};

export default Home;