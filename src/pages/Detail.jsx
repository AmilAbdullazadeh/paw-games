import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch(`https://mock-json-api.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        console.log(data);
      });
  }, []);

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  let f = basket.find((t) => t.id === id);
  const addToBasket = (id) => {
    let check = basket.filter((e) => e.id === id);
    if (check.length === 0) {
      dispatch({ type: "ADD", payload: id });
    }
  };

  return (
    <>
      <div className="wallpaper">
        <img src={product.imagewp} alt="" />
      </div>
      <div className="detail">
        <div className="nav-mar">
          <div className="container">
            <div className="product-wrapper">
              <div className="product-img">
                <img src={product.image} alt="img" />
                <div className="icons">
                  <div className="iplatform">
                    <i className="fa-solid fa-computer"></i>
                    {product.platform}
                  </div>
                  <div className="itag">
                    <i className="fa-solid fa-tag"></i>
                    {product.tag}
                  </div>
                </div>
              </div>
              <div className="product-detail">
                <h2>{product.title}</h2>
                <p>
                  {toggle ? product.description : ""}
                  <span onClick={() => setToggle(!toggle)}>
                    {toggle ? "Read Less" : "Read About The Game"}
                  </span>
                </p>
                <div className="btn-area">
                  <button
                    onClick={() => addToBasket(product.id)}
                    className="add-btn"
                  >
                    ADD TO CARD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
