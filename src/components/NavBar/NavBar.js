
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './NavBar.css';

const NavBar = (props) => {
    return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand id="Nav">Becky Ghita</Navbar.Brand>
                <Nav className="button">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
    )
}

export default NavBar;