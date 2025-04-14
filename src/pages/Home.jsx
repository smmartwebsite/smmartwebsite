import React from "react";
import "./Home.css";

import SuccessHexagon from "../components/HomePage/SuccessHexagon/SuccessHexagon"; // Adjust path if needed
import Welcome from "../components/HomePage/Welcome/Welcome"; // Adjust path if needed
import LiveCounter from "../components/HomePage/LiveCounter/LiveCounter";

import Footer from "../components/Footer/Footer"


const Home = () => {
  return (
    <>

    <section className="welcome">
      <Welcome />
    </section>

    <section id="success-hexagon-section">
      <SuccessHexagon />
    </section>

    <section>

    </section>

    <Footer />

    </>
  )
};

export default Home;