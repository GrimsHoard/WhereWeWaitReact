import { Outlet } from "react-router-dom";

import {Container, Nav, Navbar} from 'react-bootstrap';



const Layout = () => {
  return (
    <>
    
       <Navbar sticky="top" variant = "light" expand="lg">
        <Container id = "navbar_container">
          <Navbar.Brand href="#home">Where We Wait</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/demo">Demo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <Outlet />
    </>
  )
};

export default Layout;