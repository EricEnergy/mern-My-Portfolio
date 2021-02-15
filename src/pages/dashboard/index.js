import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import {Jumbotron, Row, Col} from 'react-bootstrap';
import Puzzle from '../../components/puzzle';
import logo1 from '../../images/e3.5.png';
import logo from '../../images/underc.jpg';
import logoM from '../../images/mern.png';
import resume from "../../images/Eric_Simmons_Resume.pdf"
import "bootstrap/dist/css/bootstrap.min.css";

export default class TodosList extends Component {
    render() {
        return (
            <div>
                <Puzzle/>
                <div clasName="container1">
                    <div className="parallax1">
                        <Navbar id="navbarId" fixed="top" className="navbar-collapse" collapseOnSelect expand="lg" variant="dark">
                            <Navbar.Brand href="/mern-My-Portfolio"><img className="logoImage" src={logo1} width="200" height="" /></Navbar.Brand>
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
                        <h1 md="auto" className="text-center" id="frontPage">Eric Simmons</h1>
                        <h4 className="text-center" id="frontPageLine2">Creative</h4>
                    </div>
                </div>

                <img src={logoM} className="mern" height="50" width="200" alt="mernlogo" />
                <h2 id="name" className="text-center">Welcome! </h2> <h4 className="text-center mb-4"> As a up and coming full stack web developer my goal is to help make your website dreams a reality by creating websites that meet your standards while using the latest website languages. Lets get creative!  </h4>
                <Jumbotron id="jumbotron">

                    <Row>
                        <Col md="auto" className="text-center mb-4">
                            <img src={logo} id="profilePic" height="300" width="300" alt="profilepicture" /><br></br>
                            <a className="ml-4" href="https://www.linkedin.com/in/ericsimmonsnash/">Linkedin  |</a>
                            <a href="https://github.com/EricEnergy"> Github  |</a>
                            <a href={resume}>   My Resume</a>
                        </Col>
                        <Col class="container-fluid">
                            <h2 className="text-center">About me</h2>
                            <hr></hr>
                            <h6 className="mb-4">Goal-oriented web developer with strong commitment to collaboration and solutions oriented problem-solving. Utilizes various web design software to develop customer-focused websites and designs. Committed to high standards of web design, user experience and usability for multiple types of end-users. Graphic design background results in judicious, creative, effective websites, apps, and platforms, which propel competitive advantage and revenue growth.
                            </h6>
                        </Col>
                    </Row>
                </Jumbotron>

                <div clasName="container">
                    <div className="parallax2">
                    </div>
                </div>
                <Row>
                    <Col>
                        <h3 className="mb-4 mt-4 text-center">Testimonies </h3>
                        <h5 className="text-center mt-4 mb-4"> . </h5>
                        <h5 className="text-center mt-4 mb-4">
                            "Eric and I went through the Vanderbilt Coding Boot Camp together, and throughout the program, Eric made great strides as a web developer. He continuously proved that he was willing to put the time and effort required to accomplish whatever goals he set.
                            As we worked on a group project together, Eric worked tirelessly to do whatever was necessary to create a viable, functioning application, and was consistently available and engaged to help out wherever he was needed. I believe that Eric's level of motivation and determination would make him an asset to any team."
                         </h5>
                         <h5 className="text-center mt-4 mb-4"> . </h5>
                        <h5 className="text-center mt-4 mb-4">
"                            Eric is extremely knowledgeable in several programming languages. He helped me build my website when I was completely stuck. He is great to work with and I highly recommend him!
"                         </h5>
                    </Col>
                </Row>

                <Jumbotron>
                    <Row>
                        <Col></Col>
                        <Col><h4 className=" ml-5 mt-2 mb-4" id="dark">
                            <u className="uText">Technologies I've Used</u>
                        </h4></Col>
                        <Col></Col>

                    </Row>
                    <h5 id="dark">
                        <Row>
                            <Col> <ul>
                                <li>HTML, CSS</li>
                                <li>Bootstrap/Foundation </li>
                                <li>jQuery, AJAX </li>
                                <li>Jest, Mocha, Chai </li>
                            </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>JavaScrpit/[ES5,ES6]</li>
                                    <li>Node.js, NPM</li>
                                    <li>Express</li>
                                    <li>Github</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>MySQL, Sequelize</li>
                                    <li>React.js</li>
                                    <li>MongoDB</li>
                                    <li>Google Suite</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>Visual Studio Code</li>
                                    <li>Google Suite</li>
                                </ul>
                            </Col>
                        </Row>
                    </h5>
                </Jumbotron>
                <div className="parallax1_5">
                </div>
            </div>
        )
    }
}