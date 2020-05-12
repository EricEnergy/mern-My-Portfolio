import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron';
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact";
import Main from "./components/main";
import Portfolio from "./components/portfolio";
import './fonts/PlayfairDisplay-VariableFont_wght.ttf'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </Router>
    );
  }
}

export default App;