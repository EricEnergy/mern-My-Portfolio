import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/underc.png';


export default class TodosList extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col> </Col>
                        <Col className="text-center powder"><img src={logo} height="200" width="200" margi="auto" alt="Logo" /></Col>
                        <Col> </Col>
                    </Row>
                    <Row>
                        <Col className="text-center powder"><h3>Web site under construction.</h3></Col>
                    </Row>
                    <Row className="text-center">
                        <Col> </Col>
                        <Col md="auto">
                            <h6>In the mean time feel free to visit my Linkedin where I have featured  <br />projects or my Github where you will see my top starred projects with <br />links to my deployed work.
                        <br/>
                        -Eric Simmons
                             </h6>
                        </Col>
                        <Col> </Col>
                    </Row>
                    <Row className="text-center">
                    <Col> </Col>
                        <Col md="auto">
                        <a href="https://www.linkedin.com/in/ericsimmonsnash/">Linkedin  |</a>
                        <a href="https://github.com/EricEnergy"> Github</a>
                        </Col>
                        <Col> </Col>
                    </Row>

                </Jumbotron>
            </div>
        )
    }
}