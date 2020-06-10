import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";

import One from "../assets/img/one.jpg";
import Two from "../assets/img/two.jpg";
import Three from "../assets/img/three.jpg";
import Four from "../assets/img/four.jpg";

const Products = () => {
  return (
    <div className="products">
      <Navbar />
      <div className="header">
        <h1>Lorem, ipsum dolor.</h1>
      </div>
      <div className="span">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
      </div>
      <div className="products__container">
        <div className="box">
          <img src={One} alt="product_img" />
          <div className="info">
            Lorem, ipsumt. Esse at qui consequatur et, debitis optio
            reprehenderit perspiciatis.
          </div>
        </div>
        <div className="box">
          <img src={Two} alt="product_img" />
          <div className="info">
            Lorem ipsum dolor sit ame consectetur omnis possimus maxime, sequi
            voluptatem?
          </div>
        </div>
        <div className="box">
          <img src={Three} alt="product_img" />
          <div className="info">
            Lorem ipsum, dolor sit amet consectet. Nisi atque magnam iste!
          </div>
        </div>
        <div className="box">
          <img src={Four} alt="product_img" />
          <div className="info">
            Lorem ipsum dolor sit amet consectiet officiis eos. Asperiores rerum
            quo quod dolor enim ullam molestiae sequi?
          </div>
        </div>
        <div className="box">
          <img src={One} alt="product_img" />
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            consequatur nisi inventore magni qui perferendis repudiandae modi
            deleniti.
          </div>
        </div>
        <div className="box">
          <img src={Two} alt="product_img" />
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            nesciunt mollitia rerum ad numquam vel aliquid placeat repudiandae
            in!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
