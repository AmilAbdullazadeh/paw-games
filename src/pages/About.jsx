import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import paw from "../assets/images/paw.gif";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import jaho from "../assets/images/jaho.jpg";
import elr from "../assets/images/elr.jpg";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [counterup, setCounterup] = useState(false);
  return (
    <div className="nav-mar">
      <div className="about container mt-5 mb-5">
        <div className="sec-header">
          <h2>
            About <span>us</span>
          </h2>
        </div>
        <div className="col-12 bg-dark mt-5">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="about-img">
                <img src={paw} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="about-text">
                <span>WHO WE ARE</span>
                <h2>
                  <span>Paw-Games</span> an unknown printer took galley of type
                  and scrambled type specimen book.
                </h2>
                <h4>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type survived not only five centuries.
                </h4>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into setting, remaining
                  essentially unchanged. when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only so the leap into electronic typesetting
                  remaining.
                </p>
                <Link data-aos="fade-left" to={"/contact"}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="sec-header mt-5 mb-5">
          <h2>
            Our <span>Success</span>
          </h2>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterup(true)}
          onExit={() => setCounterup(false)}
        >
          {counterup && (
            <div data-aos="fade-up" className="elements">
              <div className="row">
                <div className="col-3">
                  <div className="element-item">
                    <h4 className="text-center">Total Users</h4>
                    <p>
                      <CountUp start={0} end={5321} duration={5} delay={0} />
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="element-item">
                    <h4 className="text-center">Gaming Post</h4>
                    <p>
                      <CountUp start={0} end={2130} duration={5} delay={0} />
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="element-item">
                    <h4 className="text-center">Total Likes</h4>
                    <p>
                      <CountUp start={0} end={3129} duration={5} delay={0} />
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="element-item">
                    <h4 className="text-center">Share Post</h4>
                    <p>
                      <CountUp start={0} end={1228} duration={5} delay={0} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ScrollTrigger>
        <div data-aos="zoom-in" className="p-review sec-header mt-5 mb-5">
          <h2>
            Players' <span>Review</span>
          </h2>
          <p>
            blanditiis praesentium voluptatum deleniti atque corrupti.accusamus
            et iusto odio corrupti.accusamus et iusto odioiusto odio dignissimos
            ducimus qui blanditiis
          </p>
        </div>
        <div className="players">
          <div className="col-12">
            <div className="row">
              <div
                data-aos="fade-right"
                className="player-card col-12 col-lg-6"
              >
                <div className="player-content">
                  <div className="player-header">
                    <div className="player-img">
                      <img src={jaho} alt="jaho" />
                    </div>
                    <div className="player-secheader">
                      <h2>Ahmet Sonuch</h2>
                      <p>Player</p>
                    </div>
                  </div>
                  <div className="player-text">
                    <p>
                      Nullam orci dui, dictum et magna sollicitudin, tempor
                      blandit erat. Maecenas suscipit tellus sit amet augue
                      placerat fringilla a id lacus. Fusce tincidunt in leo
                      lacinia condimentum.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className="player-card col-12 col-lg-6">
                <div className="player-content">
                  <div className="player-header">
                    <div className="player-img">
                      <img src={elr} alt="jaho" />
                    </div>
                    <div className="player-secheader">
                      <h2>Tughkan Gonultash</h2>
                      <p>Player</p>
                    </div>
                  </div>
                  <div className="player-text">
                    <p>
                      Nullam orci dui, dictum et magna sollicitudin, tempor
                      blandit erat. Maecenas suscipit tellus sit amet augue
                      placerat fringilla a id lacus. Fusce tincidunt in leo
                      lacinia condimentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
