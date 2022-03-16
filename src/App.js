import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Makeup from "./components/Makeup";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Skin from "./components/Skin";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/Makeup">
              <Product />
              <Makeup />
              <Footer />
            </Route>{" "}
            <Route exact path="/Skin">
              <Skin />
              <Footer />
            </Route>
          </Switch>{" "}
        </Router>
      </div>
    );
  }
}
