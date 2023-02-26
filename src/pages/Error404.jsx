import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/images/error.png";

function Error404() {
  return (
    <div className="nav-mar">
      <div className="error">
        <div className="error-img">
          <img src={error} alt="" />
        </div>
        <div className="error-text">
          <h1>404</h1>
          <h3>Oops! That page cannot be found</h3>
          <h5>Sorry, but the page you are looking for does not existing</h5>
          <div className="error-btn">
            <div className="about-text">
              <Link to={"/"}>Go to main</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
