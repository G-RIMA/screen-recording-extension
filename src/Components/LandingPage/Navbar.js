import React from "react";
import HelpMeOut from "../../Assets/HelpMe.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container text-center">
        {/* column 1 */}
        <div>
          <a
            className="navbar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <img
              src={HelpMeOut}
              alt="logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            HelpMeOut
          </a>
        </div>

        {/* column 2 */}
        <div className="row align-items-start justify-content-between">
          <div className="col-6 col-md">
            <a className="nav-link" href="/">
              Features
            </a>
          </div>
          <div className="col-6 col-md">
            <a className="nav-link" href="/">
              How It Works
            </a>
          </div>
        </div>
        {/* column 3 */}
        <div className="row align-items-start justify-content-between">
          <div className="col-12 col-md">
            <a className="nav-link" href="/">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
