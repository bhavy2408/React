import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </NavLink>
            <NavLink to="About">
              <Nav.Link href="#About">About</Nav.Link>
            </NavLink>
            <NavLink to="contact">
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </NavLink>
            <NavLink to="Feature">
              <Nav.Link href="#Feature">Feature</Nav.Link>
            </NavLink>
            <NavLink to="Pricing">
              <Nav.Link href="#Pricing">Pricing</Nav.Link>
            </NavLink>
            <NavLink to="Product">
              <Nav.Link href="#Product">Product</Nav.Link>
            </NavLink>
            <NavLink to="Errorpage">
              <Nav.Link href="#404">404</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
