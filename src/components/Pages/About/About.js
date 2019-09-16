import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './About.css';
import Images from "./../../Carousel/Carousel";

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
                                Before i found my talent 
                                as a Technician it first began with my passion being a Mechanic.
                                Every sunny day i wasn't working was most likely spent in the garage working on my car.
                                I've had moments of frusterated but thats what made me want to fix it that much more.
                                No matter how difficult it got nothing took away the satisfaction of
                                fixing the code at the end of the day.
                                I then graduated a nine month program at Unitek College that went over Hardware, Software,
                                Networking, Security, Vlan, Server, Cloud and Desk
                                Support. That helped me get my foot into Google through a
                                vendor company. After almost two years of being with Google i was motivated to go back to school 
                                to gain more knowledge in coding as Web Developer.
                            </div>
                        </div>
                    </Col>
                    <Col/>
                </Row>
            </Container>
    )
}

export default About
