import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "../Api/allApi";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { isAuthenticated } from "../utils/common";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useSelector } from "react-redux";

const LinksBar = () => {
  const state = useSelector((state) => state.handleCart);
  const [dataStorage, setDataStorage] = useState("Hello");
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Logout
    </Tooltip>
  );

  useEffect(() => {
    let data = JSON.parse(isAuthenticated().user);
    setDataStorage(data);
  }, []);
  const navigate = useNavigate();

  const handleClick = () => {
    clearLocalStorage();
    navigate("/login");
  };
  return (
    <>
      <Nav className="me-auto d-flex justify-content-center align-items-start m-auto">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <Nav.Link className="nav-item ">
            <NavLink to="/" className="nav-link nav-link-grow-up">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link className="nav-item ">
            <NavLink to="/products" className="nav-link nav-link-grow-up">
              Products
            </NavLink>
          </Nav.Link>
          <Nav.Link className="nav-item ">
            <NavLink to="/about" className="nav-link nav-link-grow-up">
              About
            </NavLink>
          </Nav.Link>
          {isAuthenticated().token && (
            <>
              <Nav.Link className="nav-item">
                <NavLink to="/events" className="nav-link nav-link-grow-up">
                  Events
                </NavLink>
              </Nav.Link>
            </>
          )}

          <Nav.Link className="nav-item">
            <NavLink to="/contactus" className="nav-link nav-link-grow-up">
              contact us
            </NavLink>
          </Nav.Link>
          {!isAuthenticated().token && (
            <>
              <Nav.Link className="nav-item">
                <NavLink to="/login" className="nav-link  nav-link-grow-up">
                  login
                </NavLink>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <NavLink to="/signup" className="nav-link nav-link-grow-up">
                  Signup
                </NavLink>
              </Nav.Link>
            </>
          )}
        </ul>
      </Nav>
      <Nav className="d-flex justify-content-center align-items-start">
        {isAuthenticated().token && (
          <Nav.Link className="nav-item">
            <NavLink
              to="/profile"
              className="nav-link d-flex align-items-center "
            >
              {dataStorage?.name}
              <i
                className="fa fa-user-circle fa-lg ms-2"
                aria-hidden="true"
              ></i>
            </NavLink>
          </Nav.Link>
        )}

        <Nav.Link className="nav-item">
          <Link to="/cart" className="nav-link cart1">
            {isAuthenticated().token != null ? (
              <span className="count">{state.length}</span>
            ) : (
              <span className="count">0</span>
            )}
            <i className="material-icons fa fa-shopping-cart fa-lg"></i>
          </Link>
        </Nav.Link>

        {isAuthenticated().token && (
          <>
            <Nav.Link className="nav-item theme-blue-footer">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button onClick={handleClick}>
                  <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                </Button>
              </OverlayTrigger>
            </Nav.Link>
          </>
        )}
      </Nav>
    </>
  );
};

export default LinksBar;
