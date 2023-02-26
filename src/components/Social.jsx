import React, { useEffect } from "react";
import Aos from "aos";

function Social() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <div data-aos="fade-up" className="social-boxes">
        <div className="social-box">
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="social-box">
          <a href="https://twitter.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="social-box">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
