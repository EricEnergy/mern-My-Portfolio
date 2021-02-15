import React, { useState, useEffect, Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import logo1 from '../../images/e3.5.png';


function Header() {
    return (
        <Fragment>
            <div clasName="container1">
                <div className="parallax1_5">
                    <Navbar id="navbarId" fixed="top" className="navbar-collapse" collapseOnSelect expand="lg" variant="dark">
                        <Navbar.Brand href="/mern-My-Portfolio/#"><img src={logo1} width="200" height="" /></Navbar.Brand>
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
                </div>
            </div>
        </Fragment>
    )
};

export default Header;