import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {motion } from 'framer-motion'
import Footer from "../components/Footer";
import Brief from "../components/Brief";
import Offer from "../components/Offer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <motion.div exit={{ opactiy: 0}} animate={{opacity:1}}  initial={{ opacity: 0}}>
        <section className="intro">
          <div className="left"></div>
          <div className="right"></div>

          <div
            className="content">
            <div className="stripe">
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam?
            </h1>
            <p>Lorem ipsum dolor sit ametaliquam ut ipsa, nesciunt libero?</p>

            <Link to="/products">
              {" "}
              <Button title="Show more" />
            </Link>
          </div>
          <Navbar />
        </section>

        <Brief visable={true} />

        <section className="product">
          <header className="product__header">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </header>
          <div className="product__wrap">
            <div className="box">
              <div className="icon"></div>
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabos ?
              </p>
              <div className="more">
                <span className="read-more">
                  <Link to="/products">Read more</Link>
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon"></div>
              <h3>Lorem adipisicing.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetu. Veritatis modi hic sunt?
              </p>
              <div className="more">
                <span className="read-more">
                  <Link to="/products">Read more</Link>
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon"></div>
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis aut nisi fuga.
              </p>
              <div className="more">
                <span className="read-more">
                  <Link to="/products">Read more</Link>
                </span>
              </div>
            </div>
          </div>
        </section>

        <Offer />

        <Footer />
      </motion.div>
    );
  }
}
