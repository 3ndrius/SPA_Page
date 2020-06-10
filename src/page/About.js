import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import Brief from "../components/Brief";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="header">
        <h1>About</h1>
      </div>
      <Brief visable={false} />
      <Footer />
    </div>
  );
};

export default About;
