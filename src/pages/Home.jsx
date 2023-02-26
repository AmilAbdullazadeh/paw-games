import { useState, useEffect } from "react";
import Slider from "../components/Slider";
import rdr2 from "../assets/images/rdr2.png";
import Card from "../components/card/Card";
import plague from "../assets/images/plague.jfif";
import Countdown from "react-countdown";
import delta from "../assets/images/delta.jpg";
import { Link } from "react-router-dom";
import Featured from "../components/featured/Featured";
import Social from "../components/Social";
import Aos from "aos";
import vr from "../assets/images/vr.jpg";

function Home() {
  const [hov1, setHov1] = useState(false);
  const [player, setPlayer] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

  const handleMouseOver = () => {
    setHov1(true);
  };

  const handleMouseOut = () => {
    setHov1(false);
  };

  const [products, setProducts] = useState([]);

  const sliderGames = [];

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  products.slice(12, 15).map((e) => {
    JSON.stringify(e);
    sliderGames.push(e);
  });

  return (
    <div className="home">
      <div className="bg-image">
        <img src={vr} alt="" />
        <div className="overlaytext">
          <h1>WELCOME TO <span>PAW-GAMES</span>!</h1>
        </div>
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="player">
        <div className="player-img">
          <img src={rdr2} alt="" />
          <div className={hov1 ? "player-bg hovered" : "player-bg"}></div>
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="play-btn"
          onClick={() => setPlayer(true)}
        >
          <i className="fa-solid fa-circle-play"></i>
        </div>
      </div>
      {player && (
        <div className="setplayer">
          <div className="setoverlay"></div>
          <div className="popUp">
            <div className="closebutton">
              <button onClick={() => setPlayer(false)} className="closebtn">
                X
              </button>
            </div>
            <div className="player">
              <iframe
                width="885"
                height="498"
                src="https://www.youtube.com/embed/eaW0tYpxyp0"
                title="Red Dead Redemption 2: Official Trailer #3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div data-aos="zoom-in" className="sec-header sec-middle mt-5">
        <h1>
          OUR <span>GAMES</span>
        </h1>
        <p>
          Gaming is our passion. We create fun games that you’ll love. Our games
          are the BEST!
        </p>
      </div>
      <div className="container">
        <div className="games mt-5 mb-5">
          <div className="row">
            {sliderGames.map((index, key) => (
              <div key={key} className="col-12 col-sm-6 col-lg-4">
                <Featured
                  title={index.title}
                  image={index.image}
                  id={index.id}
                  price={index.price}
                  tag={index.tag}
                  platform={index.platform}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relase">
        <div data-aos="zoom-in" className="sec-header">
          <h1>Upcoming Games</h1>
          <p>A Plague Tale: Requiem </p>
        </div>
        <div data-aos="fade-up" className="rel-game">
          <img src={plague} alt="rel-game" />
          <div className="counter">
            <Countdown
              date={Date.now() + 2 * (60 * (60 * 1000))}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
      <div className="add-text">
        <div data-aos="zoom-in" className="sec-header">
          <h1>
            Don't fotget to check our <span>Store</span>!
          </h1>
        </div>
      </div>
      <div data-aos="fade-up" className="store-ad">
        <div className="product">
          <div className="store-btn">
            <button data-aos="fade-right">
              <Link>Store</Link>
            </button>
            <p>
              We also have the best <span>products</span>!
            </p>
          </div>
          <img src={delta} alt="delta" />
        </div>
      </div>
      <div className="socialnetwork">
        <div className="add-text">
          <div data-aos="zoom-in" className="sec-header">
            <h1>
              Let's get <span>Social</span>!
            </h1>
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
}

export default Home;
