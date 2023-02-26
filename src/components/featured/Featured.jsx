import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useDispatch, useSelector } from "react-redux";

function Featured({ title, id, image, price, tag, platform }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  let f = basket.find(t=>t.id === id);
  const addToBasket = (id) => {
    let check = basket.filter((e) => e.id === id);
    if (check.length === 0) {
      dispatch({ type: "ADD", payload: id });
    }
  };

  return (
    <div data-aos="fade-up" className="featured-card">
      <div className="fcardimg">
        <img src={image} alt="img" />
        <div className="overlay">
          <Link to={`/products/${id}`}></Link>
        </div>
        <div className="fcardtext">
          <h2>{title}</h2>
          <div className="fcardtag">
            <div className="fplatform">
              <i className="fa-solid fa-computer"></i>
              {platform}
            </div>
            <div className="ftag">
              <i className="fa-solid fa-tag"></i>
              {tag}
            </div>
          </div>
        </div>
        <div className={`fcardtext2 ${f?"exist":null}`}>
          <h2>$ {price}</h2>
          <button onClick={() => addToBasket(id)} className="fcart">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
