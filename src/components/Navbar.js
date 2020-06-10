import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar--mini">
        <div className="navbar__logo">
          <Link to="/">
            {" "}
            <span>Sample</span>
          </Link>
        </div>
        <nav className="navbar__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/contact">
            <Button title="Message" />
          </Link>
        </nav>
      </div>
    );
  }
}
