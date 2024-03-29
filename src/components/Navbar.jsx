import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-whitesmoke bg-whitesmoke container-fluid border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <h2 className="text-primary">Portfolio</h2>
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
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active nav--link text-primary"
                  aria-current="page"
                  to={"/"}
                >
                  INTRODUCTION
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav--link" to={"/skills"}>
                  SKILLS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav--link" to={"/projects"}>
                  PROJECTS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav--link" to={"/acheivements"}>
                  ACHEIVEMENTS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav--link" to={"/contact"}>
                  CONTACT ME
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
