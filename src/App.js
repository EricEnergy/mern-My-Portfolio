import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/contact";
import Main from "./pages/dashboard";
import Portfolio from "./pages/portfolio";
import './fonts/PlayfairDisplay-VariableFont_wght.ttf'

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </Router>
      </>
    );
  }
}

export default App;