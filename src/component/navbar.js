import React from "react";
import {
  Link
} from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = (p) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${p.mode} bg-${p.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {p.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active"  to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active"  to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${p.mode==="light"?"dark":"light"}`}>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={p.toggle}
          style={{cursor:"pointer"}}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Enable {p.mode==="light"?"dark":"light"} mode
        </label>
      </div>
      </div>
   
    </nav>
  );
};
Navbar.propTypes = { title: PropTypes.string };
export default Navbar;
