import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Images from "./../../Carousel/Carousel";
import Footer from "./../../Footer/Footer";
import './About.css';

const About = () => {
    return (
            <Container className="background">
                <Row>
                    <Col/>
                    <Col md={12}>
                        <div className="box">
                            About Me
                            <Images />
                            <div className="text">
                                Growing up my passion in technology and design began with my car. Wether it was changing an alternator, break pads or doing an oil change there
                                wasn't anything too difficult for me to research and fix myself. The satisfaction of fixing the code by replacing the right 
                                part is very similar to popping up the hood on a Web Application trying to figure where you're code is conflicting. An engine is
                                built is in a Four Stroke cycle which is Intake, Compress, Power and Ehaust. In order to exceed its maximum performance all four of thoes
                                cycles need to be ready on command. Which I can relate with how the Front-end needs to communicate with Back-end in order to finish 
                                it's on key function. Many wouldn't think of making the same relation to a car and a application, but their both constantly upgrading technology.
                            </div>
                        </div>
                    </Col>
                    <Col/>
                </Row>
                <Row/>
                <Footer />
            </Container>
    )
}

export default About
