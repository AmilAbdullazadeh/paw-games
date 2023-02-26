import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const loc = useLocation();
  return (
    <>
      {loc.pathname !== "/admin" ? (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 d-flex justify-content-center">
                <div className="footer-about">
                  <h3>ABOUT US</h3>
                  <p>
                    Etiam consequat sem ullamcorper, euismod metus sit amet,
                    tristique justo. Vestibulum mattis, nisi ut faucibus
                    commodo, risus ex commodo.
                  </p>
                  <p>
                    euismod metus sit amet, tristique justo. Vestibulum mattis
                    Vestibulum mattis,
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 d-flex justify-content-center">
                <div className="footer-explore">
                  <h3>EXPLORE</h3>
                  <ul>
                    <li>
                      <Link to={"/about"}>
                        <i className="fa-solid fa-play"></i>About
                      </Link>
                    </li>
                    <li>
                      <Link to={"/store"}>
                        <i className="fa-solid fa-play"></i>Our Games
                      </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>
                        <i className="fa-solid fa-play"></i>Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to={"/faq"}>
                        <i className="fa-solid fa-play"></i>Help & Support
                      </Link>
                    </li>
                    <li>
                      <Link to={"/privacy"}>
                        <i className="fa-solid fa-play"></i>Privacy & Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 d-flex justify-content-center">
                <div className="footer-explore">
                  <h3>OUR GAMES</h3>
                  <ul>
                    <li>
                      <Link to={"/products/11"}>
                        <i className="fa-solid fa-play"></i>Arma III
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products/19"}>
                        <i className="fa-solid fa-play"></i>Call Of Duty
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products/5"}>
                        <i className="fa-solid fa-play"></i>Mafia: Definitive
                        Edition
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products/6"}>
                        <i className="fa-solid fa-play"></i>Metro: Exodus
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products/7"}>
                        <i className="fa-solid fa-play"></i>Red Dead Redeption 2
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 d-flex justify-content-center">
                <div className="footer-contact">
                  <h3>CONTACT US</h3>
                  <h5>
                    {" "}
                    <i className="fa-solid fa-location-pin"></i>Address
                  </h5>
                  <p>88 road, broklyn street new york, usa</p>
                  <h5>
                    <i className="fa-solid fa-envelope"></i>Email Address
                  </h5>
                  <p>info@example.com</p>
                  <h5>
                    <i className="fa-solid fa-phone"></i>Phone
                  </h5>
                  <p>777-1234-567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Footer;
