import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './About.css';

const About = () => {
    return (
            <Container className="background">
                <Row>
                    <Col md={12}>
                        <div className="box">
                            About Me
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default About
