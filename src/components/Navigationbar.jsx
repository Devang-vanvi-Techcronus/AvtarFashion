import React from "react";
import LinksBar from "../Router/LinksBar";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Navigationbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xl"
        className="theme-blue-footer"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <NavLink className="navbar-brand" to="/">
              <i className="fa fa-buysellads fa-lg me-2" aria-hidden="true"></i>
              AvtarFashion
            </NavLink>
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
