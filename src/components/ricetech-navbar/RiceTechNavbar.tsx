import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './_ricetech-navbar.scss';

// noinspection HtmlUnknownTarget
export const RiceTechNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Navbar.Brand as={Link} to="/" className="mr-2">
      <img
        src="/img/logo/the_ricetech-23.svg"
        className="d-inline-block align-top navbar--logo"
        alt="React Bootstrap logo"
      />{' '}
      Eric Chen (RiceTech)
    </Navbar.Brand>
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
