import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar expand="lg" style={
            {backgroundColor: "rgb(57, 255, 20)",
            fontWeight: "bold"}
            }>
            <Container>
                <Navbar.Brand href="#home">NMIXX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">INICIO</Nav.Link>
                        <Nav.Link href="#link">TIENDA</Nav.Link>
                        <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ALBUMES</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">CDS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">PHOTOBOOKS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
    )
}

export default NavBar