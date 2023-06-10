import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" style={
            {backgroundColor: "rgb(57, 255, 20)",
            fontWeight: "bold"}
            }>
            <Container>
                <Navbar.Brand href="/">CAMISETAS STORE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                            <Link to="/" style={{textDecoration: "none", color:"black"}}>INICIO</Link>
                        </Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/category/argentinas" style={{textDecoration: "none", color:"black"}}>ARGENTINAS</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/category/internacionales" style={{textDecoration: "none", color:"black"}}>INTERNACIONALES</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/category/otros" style={{textDecoration: "none", color:"black"}}>OTROS</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
