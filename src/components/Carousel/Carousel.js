import React from 'react';
import './Carousel.css';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Gif1 from "./../Images/sunset.gif";
import Gif2 from "./../Images/cmp.gif";
import Gif3 from "./../Images/tree.gif";
const Images = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="8" className="mt-3">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    height="300px;"
                                    className="d-block w-100 mx-auto"
                                    src={Gif2}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    height="300px;"
                                    className="d-block w-100 mx-auto"
                                    src={Gif1}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    height="300px;"
                                    className="d-block w-100 mx-auto"
                                    src={Gif3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Images;
