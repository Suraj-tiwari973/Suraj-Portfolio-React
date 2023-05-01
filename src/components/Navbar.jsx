import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-whitesmoke bg-whitesmoke container-fluid">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3 style={{color:"black"}}>Portfolio</h3>
          </a>

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
                <a className="nav-link active text-white intro" aria-current="page" href="#">
                    INTRODUCTION
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  SKILLS
                </a>
              </li>

              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PROJECTS
                </a>
              </li>

              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ACHEIVEMENTS
                </a>
              </li>
              
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT ME
                </a>
              </li>
              
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
