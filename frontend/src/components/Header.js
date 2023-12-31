import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" style={{ color: "brown" }}>
        Student-Manager
      </div>
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
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <button
                type="button"
                class="btn btn-outline-dark btn-sm"
                style={{ width: "100%" }}
              >
                Home
              </button>
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              <button
                type="button"
                class="btn btn-outline-success btn-sm"
                style={{ width: "100%" }}
              >
                Create Student
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
