import React from 'react';
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import './Portfolio.css';
import Link from "./../../Images/link.jpg";
import Code from "./../../Images/git.jpg";
import Go from "./../../Images/resume.gif";

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
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                </Card>
                                    </Col>
                                    <Col xs={6} md={4}>
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" className="linked" src={ Go } />
                                        <Card.Body className="font">
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                </Card>
                                    </Col>
                                    <Col xs={6} md={4}>
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" className="linked" src={ Link } />
                                        <Card.Body className="font">
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                </Card>
                                    </Col>
                                </Row>
                        </div>
                    </Col>
                    <Col/>
                </Row>
            </Container>
    )
}

export default Portfolio;
