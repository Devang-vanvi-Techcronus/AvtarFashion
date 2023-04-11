import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { clearLocalStorage, getLocalStorage } from "../Api/allApi";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { isAuthenticated } from "../utils/common";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const LinksBar = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Logout
    </Tooltip>
  );

  const navigate = useNavigate();

  const handleClick = () => {
    clearLocalStorage();
    navigate("/login");
  };
  return (
    <>
      <Nav className="me-auto">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <Nav.Link className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <NavLink to="/events" className="nav-link">
              Events
            </NavLink>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <NavLink to="/contactus" className="nav-link">
              contact us
            </NavLink>
          </Nav.Link>
          {!isAuthenticated().token && (
            <>
              <Nav.Link className="nav-item">
                <NavLink to="/login" className="nav-link">
                  login
                </NavLink>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <NavLink to="/signup" className="nav-link">
                  Signup
                </NavLink>
              </Nav.Link>
            </>
          )}
          <Nav.Link className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-search me-2"></i>
              <input type="text" className="searchbox" name="search" />
            </a>
          </Nav.Link>
        </ul>
      </Nav>
      <Nav>
        <Nav.Link className="nav-item">
          <Link to="/cart" className="nav-link">
            Cart{" "}
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
          </Link>
        </Nav.Link>
        <Nav.Link className="nav-item theme-blue-footer">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Button onClick={handleClick}>
              <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
            </Button>
          </OverlayTrigger>
        </Nav.Link>
      </Nav>
    </>
  );
};

export default LinksBar;
