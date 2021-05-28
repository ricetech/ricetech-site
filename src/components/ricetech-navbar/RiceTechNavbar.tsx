import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './_ricetech-navbar.scss';

export const RiceTechNavbar = () => (
  <Navbar variant="dark" expand="lg" sticky="top">
    <Navbar.Brand as={Link} to="/">Eric Chen (RiceTech)</Navbar.Brand>
    <Navbar.Toggle aria-controls="ricetech-navbar" />
    <Navbar.Collapse id="ricetech-navbar">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
