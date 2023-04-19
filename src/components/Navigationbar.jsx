import React from "react";
import LinksBar from "../Router/LinksBar";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="theme-blue-footer"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <a className="navbar-brand" href="/">
              <i className="fa fa-buysellads fa-lg me-2" aria-hidden="true"></i>
              AvtarFashion
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <LinksBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
