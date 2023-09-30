import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GridDown from "../../Assets/gridDown.png";
import GridTop from "../../Assets/gridTop.png";
import largeImage from "../../Assets/largeImage.png";
import TopImage from "../../Assets/topImage.png";
import LowerImage from "../../Assets/lowerImage.png";


export default function HeroSection() {
  return (
    <div class="container text-center mt-5">
      <div class="row justify-content-between">
        <div class="col-4">
          <h1 className="fw-bold">
            Show Them
            <br />
            Don't Just Tell
          </h1>
          <p>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <div className="d-flex justify-content-center my-2">
            {" "}
            {/* Center the button container */}
            <button className="btn btn-primary d-flex align-items-center">
              Install HelpMeOut
              <FontAwesomeIcon icon={faArrowRight} className="m-3" />{" "}
              {/* Added margin for space between text and icon */}
            </button>
          </div>
        </div>
        <div className="col-6">
          <div className="container-fluid">
            <div className="row h-100">
              <div
                className="col d-flex justify-content-center align-items-end mt-auto"
                style={{ marginBottom: "-30vh" }}
              >
                <img src={GridDown} alt="" className="w-100" />

                {/* image1 */}
                <img src={TopImage} alt=""/>
                <img src={LowerImage} alt=""/>


              </div>

              <div className="col d-flex justify-content-center align-items-start">
                <img src={GridTop} alt="" className="w-100" />
                <img src={largeImage} alt=""/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
