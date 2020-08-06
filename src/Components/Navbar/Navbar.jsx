import React from "react";
import './Navbar.css';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <>
    <Paper elevation={3}>
      <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <Link className="navbar-brand mx-auto" to="#">
              <img className="fifaLogo" src={Logo} alt="logo"/>
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </Paper>

    </>
  );
};

export default Navbar;
