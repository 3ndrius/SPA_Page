import React from "react";
import Button from "./Button";
import SectionOverlay from "../assets/other/section_overlay.png";
import { Link } from "react-router-dom";

const Brief = ({ visable }) => {
  return (
    <section className="brief">
      <div className="left"></div>
      <div className="right">
        <div className="img-wrap">
          <img src={SectionOverlay} alt="img section" />
        </div>
        <div className="content">
          <h1 data-sal="fade" data-sal-delay="600" data-sal-easing="easeOutSine">
            Lorem ipsum adipisicing elit. Animi ipsa cupiditate!
          </h1>

          <p>
            Lorem tae minus dolor ipsa non inventore explicabo, eum iusto
            deleniti modi itaque doloribus laboriosam temporibus quia numquam
            eaque.
          </p>
          <ul>
            <li>Lorem ipsum doloati iure illum labore.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet aliquid consequatur?</li>
            {!visable ? (
              <>
                <li>Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </>
            ) : (
              ""
            )}
          </ul>

          {visable ? (
            <Link to="/about">
              <Button title="Learn more" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Brief;
