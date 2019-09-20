import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Portfolio.css';
import Link from "./../../Images/link.jpg";
import Code from "./../../Images/git.jpg";
import Go from "./../../Images/resume.gif";
import Footer from "./../../Footer/Footer";

const Portfolio = () => {
    return (
        <Container className="background">
                <Row>
                    <Col/>
                    <Col md={12}>
                        <div className="box">
                            <div className="title">Portfolio</div>
                                <Row>
                                    <Col xs={6} md={4}>
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" className="linked" src={ Code } />
                                        <Card.Body className="font">
                                        <Card.Title>GitHub</Card.Title>
                                        <Card.Text> Check out all my repo links to the apps i've created
                                        </Card.Text>
                                        <Button className="butn" variant="primary" href="https://github.com/bghita">Go Link</Button>
                                        </Card.Body>
                                </Card>
                                    </Col>
                                    <Col xs={6} md={4}>
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" className="linked" src={ Go } />
                                        <Card.Body className="font">
                                        <Card.Title>Resume</Card.Title>
                                        <Card.Text> My work experience, education and references
                                        </Card.Text>
                                        <Button className="butn" variant="primary" href="https://docs.google.com/document/d/1CS-tnQMdFQPVFVtqfF4-H_ukGyQa3J4mwRyWkBGllME/edit?usp=sharing">Go Link</Button>
                                        </Card.Body>
                                </Card>
                                    </Col>
                                    <Col xs={6} md={4}>
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" className="linked" src={ Link } />
                                        <Card.Body className="font">
                                        <Card.Title>Linked In</Card.Title>
                                        <Card.Text> Professional networking connnections with co-workers.
                                        </Card.Text>
                                        <Button className="butn" variant="primary" href="https://www.linkedin.com/in/becky-ghita-671045183/">Go Link</Button>
                                        </Card.Body>
                                </Card>
                                    </Col>
                                </Row>
                        </div>
                    </Col>
                    <Col/>
                </Row>
                <Row/>
                <Footer/>
            </Container>
    )
}

export default Portfolio;
