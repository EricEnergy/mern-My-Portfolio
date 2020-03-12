import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Contact from "./components/contact";
import Main from "./components/main";
import Portfolio from "./components/portfolio";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" target="_blank">
              <img src={logo} width="30" height="30"/>
            </a>
            <Link to="/" className="navbar-brand">Eric Simmons</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Portfolio</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Contact Me</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Main} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;