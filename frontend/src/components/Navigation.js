import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
    return (
        <div className="navigation">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">HomeApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/Notification">Notification</Nav.Link>
                        <Nav.Link href="/Resumer">Resumer</Nav.Link>
                        <Nav.Link href="/About">A propos</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;