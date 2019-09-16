import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Portfolio.css';

const Portfolio = () => {
    return (
        <Container className="background">
                <Row>
                    <Col/>
                    <Col md={12}>
                        <div className="box">
                            Portfolio
                        </div>
                    </Col>
                    <Col/>
                </Row>
            </Container>
    )
}

export default Portfolio;
