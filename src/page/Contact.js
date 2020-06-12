import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";
import SimpleMap from "./../components/Map";
import {motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.div className="contacts" exit={{ opactiy: 0}} animate={{opacity:1}}>
      <Navbar/>
      <div className="contacts-content">
        <div className="maps">
          <SimpleMap />
        </div>

        <h2>Lorem ipsum dolor sit amet esse aperiam eum quo sapiente!</h2>
        <div className="contacts-wrapper">
          <form className="contacts-left">
            <textarea
              name="message"
              className="message"
              placeholder="message"
              required
            ></textarea>
            <input
              type="text"
              className="input subject"
              placeholder="Subject"
              required
            />
            <div className="contact-left__control">
              <input
                type="text"
                className=" input name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="input email"
                placeholder="Adress Email"
                required
              />
            </div>
            <button className="btn btn-primary">Send a message</button>
          </form>

          <div className="contacts-right">
            <div className="item">
              <h4>Lorem, ipsum. </h4>
              <p>3446-56 Lorem.</p>
            </div>
            <div className="item">
              <h4>Office</h4>
              <p>Tel: 785664565</p>
            </div>
            <div className="item">
              <h4>Email</h4>
              <p>email@email.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
