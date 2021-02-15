import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import logo1 from '../../images/e3.5.png';
import Header from '../../components/header';


export default class TodosList extends Component {
  render() {
    return (
      <>

        <div clasName="container1">
        <Header/>
        </div>
        <br></br>
        <Container className="mb-4">
          <img className="mb-4" src={logo1} width="200" height="" />
          <h3 className="mb-4">Contact Page </h3><hr></hr>
          <h5 className="m-4">Email <br></br> <a href="mailto:Ericnrgnash@gmail.com">Ericnrgnash@gmail.com</a> </h5>
          <h5 className="m-4">LinkedIn Profile <br></br><a href="https://www.linkedin.com/in/ericsimmonsnash/">Linkedin</a>
          </h5>
          <h5 className="m-4 ">Phone Number <br></br><a href="tel:615-481-3124"> 615-481-3124</a> </h5>
        </Container>


        <div className="parallax2">
        </div>
        
      </>
    )
  }
}