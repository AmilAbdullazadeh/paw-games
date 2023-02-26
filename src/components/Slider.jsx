import React from "react";
import spiderman from "../assets/images/spiderman.jpg";
import cod from "../assets/images/cod.jpg";
import gow from "../assets/images/GOW.jpg";

function Slider() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overlay">
              <h1>Spider-man</h1>
              <p>This is my gift, my curse. Who am I? I’m Spider-Man!</p>
              <div className="overlaylayout"></div>
            </div>
            <img src={spiderman} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <div className="overlay">
              <h1>Call Of Duty Modern Warfare</h1>
              <p>
                Remember, switching to your pistol is always faster than
                reloading.
              </p>
              <div className="overlaylayout"></div>
            </div>
            <img src={cod} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <div className="overlay">
              <h1>God Of War</h1>
              <p>I Am What The Gods Have Made Me!</p>
              <div className="overlaylayout"></div>
            </div>
            <img src={gow} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
