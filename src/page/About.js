import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import Brief from "../components/Brief";
import {motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div className="about" exit={{ opactiy: 0}} animate={{opacity:1}}  initial={{ opacity: 0}}>
      <Navbar />
      <div className="header">
        <h1>About</h1>
      </div>
      <Brief visable={false} />
      <Footer />
    </motion.div>
  );
};

export default About;
