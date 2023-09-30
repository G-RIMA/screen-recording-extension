import React from "react";
import Circle from "../../Assets/circleIcon.png";
import Send from "../../Assets/sendIcon.png";
import Refresh from "../../Assets/refreshIcon.png";

export default function Features() {
  return (
    <div>
      <div className="mt-4 text-center">
        <h1 className="fw-bold">Features</h1>
        <p className="fw-lighter">Key Highlights of Our Extension</p>
      </div>
      <div className="container text-center">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <div style={{ padding: "20px" }}>
              {/* First Div */}
              <div style={{ marginBottom: "20px" }}>
                <div className="d-flex align-items-center mb-3">
                  <img src={Circle} alt="Icon" className="me-3" />
                  <h4>Simple Screen Recording</h4>
                </div>
                <p>
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>

              {/* Second Div */}
              <div style={{ marginBottom: "20px" }}>
                <div className="d-flex align-items-center mb-3">
                  <img src={Send} alt="Icon" className="me-3" />
                  <h4>Easy-to-Share URL</h4>
                </div>
                <p>
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>

              {/* Third Div */}
              <div style={{ marginBottom: "20px" }}>
                <div className="d-flex align-items-center mb-3">
                  <img src={Refresh} alt="Icon" className="me-3" />
                  <h4>Revisit Recordings</h4>
                </div>
                <p>
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {" "}
            {/* Adjusted to col-md-6 for better responsiveness */}
            <h1>import a component here</h1>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
