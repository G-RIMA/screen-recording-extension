import React from "react";
import record from "../../Assets/record.png";

export default function HowItWorks() {
  return (
    <div>
      <h1 className="text-center fw-bold mt-4 mb-3">How It Works</h1>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 text-center">
              <div className="d-flex justify-content-center mb-2">
                <button className="btn btn-primary rounded-circle">1</button>
              </div>
              <h3>Record Screen</h3>
              <p>Click the "Start Recording" button in our extension. Choose which part of your screen to capture and who you want to send it to.</p>
              <img src={record} alt="Image 3" className="img-fluid" /> {/* Added img-fluid class here */}
            </div>
            <div className="col-sm-4 text-center">
              <div className="d-flex justify-content-center mb-2">
                <button className="btn btn-primary rounded-circle">2</button>
              </div>
              <h3>Share Your Recording</h3>
              <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
              <img src={record} alt="Image 3" className="img-fluid" /> {/* Added img-fluid class here */}
            </div>
            <div className="col-sm-4 text-center">
              <div className="d-flex justify-content-center mb-2">
                <button className="btn btn-primary rounded-circle">3</button>
              </div>
              <h3>Learn effortlessly</h3>
              <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
              <img src={record} alt="Image 3" className="img-fluid" /> {/* Added img-fluid class here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
