import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './_ricetech-navbar.scss';

export const RiceTechNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Navbar.Brand as={Link} to="/">Eric Chen (RiceTech)</Navbar.Brand>
    <Navbar.Toggle aria-controls="ricetech-navbar" />
    <Navbar.Collapse id="ricetech-navbar">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
