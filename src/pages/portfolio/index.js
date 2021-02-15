import React, { useState, Fragment } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import p1 from '../../images/project1.jpg';
import p2 from '../../images/project2.jpg';
import p3 from '../../images/project3.png';
import p4 from '../../images/mysite.jpg';
import p5 from '../../images/project5.png';
import p6 from '../../images/petstore.jpg';
import Header from '../../components/header';


function Portfolio() {
    const [portList, setPortList] = useState([
        {
            0: ["https://github.com/EricEnergy/swaggerPetStoreReact/tree/gh-pages", "https://ericenergy.github.io/swaggerPetStoreReact/#/", p6, "project4", "Pet Store", "This  React app was created to showcase my current skillset with React and CRUD"]
        },
        {
            1: ["https://github.com/EricEnergy/mern-finalproject", "https://serv-project.herokuapp.com/", p1, "project1", "Serv", "This application is intended as a tool for small business owners in the service industry to connect with customers interested in their skills via a social media app which also utilizes a calendar to make appointments online"],
        },
        {
            2: ["https://github.com/EricEnergy/garaged", "https://garaged-app.herokuapp.com/", p2, "project2", "Garaged", "Garaged was created to be an ‘Airbnb-type’ app, but for vehicles. Its purpose is for anyone with extra garage space to make a post in their city, that someone with a lack of space can then rent out for a fee"]
        },
        {
            3: ["https://github.com/EricEnergy/tripAssistant_Project", "https://ericenergy.github.io/tripAssistant_Project/", p3, "project3", "Trip Assistant", "This app allows users to enter a city they are visiting, and they are then given a list of categories of places they can visit. From the selected list they are then shown a list of available activities or events that can then be saved to their calendar"]
        },
        {
            4: ["https://github.com/EricEnergy/javascriptquiz", "https://ericenergy.github.io/javascriptquiz/", p5, "project5", "Javascript Quiz", "A fun JavaScript quiz which is timed, gives penalties for wrong answers, and has a leaderboard"]
        },
        {
            5: ["https://github.com/EricEnergy/mern-My-Portfolio/tree/gh-pages", "https://ericenergy.github.io/mern-My-Portfolio", p4, "project4", "Personal Site", "Personal Site for my portfolio and contact info."]
        }
    ]
    );

    const renderTable = () => {
        return portList.map((data, index) => (
            <Col>
                <a id="portText" href={data[index][0]}> Project Repo</a>
                <p id="portText"> |</p>
                <a id="portText" href={data[index][1]}>Deployed App</a>
                < br ></br >
                <div class="portcol">
                    <img src={data[index][2]} className="portImages" height="275" width="500" alt={data[index][3]} />
                    <div class="portDes">
                        <h3 class="desText">{data[index][4]}</h3><br />
                        <p class="desText1">{data[index][5]}</p>
                    </div>
                </div>
            </Col >
        ))
    };

    return (
        <Fragment>
            <Header />
            <Container className="mb-4">
                <h3 className="m-4">Sample Portfolio </h3><hr></hr>
                <Row>
                    {renderTable()}
                </Row>
            </Container>
            <div className="parallax1_5">
            </div>
        </Fragment>
    )
};

export default Portfolio;