import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo1 from '../images/e3.5.png';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import p1 from '../images/project1.jpg';
import p2 from '../images/project2.jpg';
import p3 from '../images/project3.png';
import p4 from '../images/project4.png';
import p5 from '../images/project5.png';


export default class TodosList extends Component {
    render() {
        return (
            <div>
                <div clasName="container1">
                    <div className="parallax1_5">
                        <Navbar id="navbarId" fixed="top" className="navbar-collapse" collapseOnSelect expand="lg" variant="dark">
                            <Navbar.Brand href="/mern-My-Portfolio/#/portfolio"><img src={logo1} width="200" height="" /></Navbar.Brand>
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
                <Container className="mb-4">
                    <h3 className="m-4">Sample Portfolio </h3><hr></hr>
                    <Row>

                    <Col>
                    <a id="portText" href="https://github.com/EricEnergy/mern-finalproject">SERV App Repo</a> 
                    <p id="portText"> |</p>
                    <a id="portText" href="https://serv-project.herokuapp.com/">Deployed App</a>
                    <br></br>
                    <img src={p1} className="portImages" height="275" width="500" alt="project1" />
                    </Col>
                    
                    <Col>
                    <a id="portText" href="https://github.com/EricEnergy/garaged">Garaged Repo</a>
                    <p id="portText"> |</p>
                    <a id="portText" href="https://garaged-app.herokuapp.com/">Deployed App</a>
                    <br></br>
                    <img src={p2} className="portImages" height="275" width="500" alt="project2" />
                    </Col>

                    <Col>
                    <a id="portText" href="https://github.com/EricEnergy/tripAssistant_Project">Trip Planner Repo</a>
                    <p id="portText"> |</p>
                    <a id="portText" href="https://ericenergy.github.io/tripAssistant_Project/">Deployed App</a>
                    <br></br>
                    <img src={p3} className="portImages" height="275" width="500" alt="project3" />
                    </Col>

                    <Col>
                    <a id="portText" href="https://github.com/EricEnergy/javascriptquiz">JavaScript Quiz Repo</a>
                    <p id="portText"> |</p>
                    <a id="portText" href="https://ericenergy.github.io/javascriptquiz/">Deployed App</a>
                    <br></br>
                    <img src={p5} className="portImages" height="275" width="500" alt="project5" />
                    </Col>

                    <Col>
                    <a id="portText" href="https://github.com/EricEnergy/dayPlanner">Day Planner Repo</a>
                    <p id="portText"> |</p>
                    <a id="portText" href="https://ericenergy.github.io/dayPlanner/">Deployed App</a>
                    <br></br>
                    <img src={p4} className="portImages" height="275" width="500" alt="project4" />
                    </Col>

                    </Row>
                   


                </Container>
                <div className="parallax1_5">
                </div>
            </div>
        )
    }
}