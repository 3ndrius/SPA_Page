import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import sal from "sal.js";

import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import Contact from "./page/Contact";

export default class App extends Component {
  componentDidMount = () => {
    sal({// test animation lib
      threshold: 0.6,
      once: true,
    });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/contact" component={Contact} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
