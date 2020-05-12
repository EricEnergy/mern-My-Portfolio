import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from '../images/e2.0.png';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

export default class TodosList extends Component {
    render() {
        return (
            <div> 
            <Navbar id="navbarId" fixed="top" className="navbar-collapse" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/mern-My-Portfolio"><img src={logo} width="60" height="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav aria-label="Toggle navigation">
                <Link className="links" to="/portfolio">Portfolio</Link>
                <Link className="links" eventKey={2} to="/contact"> Contact </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br></br>
            <Jumbotron id="jumbotron" className="mt-4">
            <div>
                <p>Welcome the contact page Component!!</p>
            </div>
            </Jumbotron>
            </div>
        )
    }
}