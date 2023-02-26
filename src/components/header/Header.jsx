import { useState, useEffect } from "react";
import style from "./header.module.scss";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import basketimg from "../../assets/images/basket.gif";
import ac from "../../assets/images/ac.jpg";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const loc = useLocation();
  const [search, setSearch] = useState(false);
  const [searchmobile, setSearchmobile] = useState(false);
  const [basket, setBasket] = useState(false);
  const [inputvalue, setInputvalue] = useState("");
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState([]);
  const [fav, setFav] = useState(false);
  const [searchcon, setSearchcon] = useState(false);
  const [navbarcolor, setNavbarcolor] = useState(false);
  const [empity, setEmpity] = useState(true);
  const [totalPrice, setTotalPrice] = useState("");
  const [favoriteItems, setFavoriteItems] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  const basketitems = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  const addToBasket = (id) => {
    let check = basketitems.filter((e) => e.id === id);
    if (check.length === 0) {
      dispatch({ type: "ADD", payload: id });
    }
  };

  const removeFromBasket = (id) => {
    dispatch({ type: "DEL", payload: id });
  };

  useEffect(() => {
    fetch("http://localhost:7000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (inputvalue.length == 0) {
      setSearchcon(false);
    } else {
      setResult(
        products.filter((e) =>
          e.title.toLowerCase().includes(inputvalue.toLowerCase())
        )
      );
      setSearchcon(true);
    }
  }, [inputvalue]);

  const searchopt = () => {
    setSearch(false);
    if (search) {
      setSearchcon(false);
    } else {
      setSearchcon(true);
    }
  };

  const [scrolled, setScrolled] = useState(false);
  const [scrolled2, setScrolled2] = useState(false);

  useEffect(() => {
    if (scrolled) {
      setScrolled2(true);
    } else {
      setScrolled2(false);
    }
  }, [scrolled]);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  useEffect(() => {
    if (basketitems.length === 0) {
      setEmpity(true);
    } else {
      let total = 0;
      basketitems.map((e) => {
        e.price = +e.price;
        total += e.price;
        setTotalPrice(total);
      });
      setEmpity(false);
    }
  }, [basketitems]);
  const addToFav = (id) => {
    let data = products.find((e) => e.id === id);
    let favorites = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    let check = favorites.find((a) => a.id === id);
    if (!check) {
      favorites.push(data);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteItems(favorites);
  };

  const removeFromFavorite = (id) => {
    let deletedFavs = favoriteItems.filter((e) => e.id !== id);
    localStorage.setItem("favorites", JSON.stringify(deletedFavs));
    setFavoriteItems(deletedFavs);
  };
  return (
    <>
      {loc.pathname.includes("admin") ? (
        ""
      ) : (
        <>
          <div
            className={`main-header ${
              scrolled || !loc.pathname.includes("home") ? "scrolled" : ""
            }`}
          >
            <div className="container h-container">
              <div className="left-header">
                <div className="logo">
                  <h1>
                    <Link to={"/home"}>PAW-GAMES</Link>
                  </h1>
                </div>
                <div className="nav-menu">
                  <ul>
                    <li>
                      <NavLink to={"/home"}>Home</NavLink>
                    </li>
                    <li className="dp-menu">
                      <NavLink>
                        Pages <i className="fa-solid fa-paw"></i>
                      </NavLink>
                      <div className="dp-container">
                        <ul className="dp-item">
                          <li>
                            <Link to={"/gallery"}>Gallery</Link>
                          </li>
                          <li>
                            <Link to={"/faq"}>Help & Support</Link>
                          </li>
                          <li>
                            <Link to={"/*"}>Error 404</Link>
                          </li>
                          <li>
                            <Link to={"/admin"}>Admin</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <NavLink to={"/store"}>Store</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/about"}>About us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-header">
                <ul>
                  <li
                    onClick={() => {
                      setSearchcon(!search);
                      setSearch(!search);
                    }}
                  >
                    <i
                      className={
                        search
                          ? "lni lni-search-alt show"
                          : "lni lni-search-alt"
                      }
                    ></i>
                  </li>
                  <li onClick={() => setBasket(!basket)}>
                    <i className="lni lni-cart"></i>
                  </li>
                  <li onClick={() => setFav(!fav)}>
                    <i
                      className={fav ? "lni lni-heart show" : "lni lni-heart"}
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={search ? "searchbar show" : "searchbar"}>
            <form>
              <input
                placeholder="Meow..."
                onChange={(e) => setInputvalue(e.target.value)}
                type="text"
              />
              <button type="button" onClick={searchopt} className="close">
                X
              </button>
            </form>
            {searchcon && result.length ? (
              <>
                <div className="search-box show">
                  {result.slice(0, 3).map((index, key) => (
                    <div key={key} className="search-item">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-4">
                            <div className="search-img">
                              <img src={index.image} alt="" />
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="search-text">
                              <h4>{index.title}</h4>
                              <p>
                                {index.description.substring(0, 300) + "..."}
                              </p>
                            </div>
                            <div className="search-buttons">
                              <div
                                onClick={() => addToFav(index.id)}
                                className="fav-btn"
                              >
                                <i className="lni lni-heart"></i>
                              </div>
                              <div
                                onClick={() => addToBasket(index.id)}
                                className="cart-btn"
                              >
                                <i className="lni lni-cart"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  id="link"
                  className="col-12 d-flex justify-content-center py-2"
                >
                  <Link to={"/store"} onClick={searchopt}>
                    View More
                  </Link>
                </div>
              </>
            ) : null}
          </div>
          <div className={basket ? "basket show" : "basket"}>
            <div className="close-btn">
              <button
                onClick={() => setBasket(!basket)}
                className="close-basket"
              >
                X
              </button>
            </div>

            <>
              {empity ? (
                <div className="basket-gif">
                  <h1>Your basket is empty... :</h1>
                  <div className="basket-gifimg">
                    <img src={basketimg} alt="" />
                  </div>
                </div>
              ) : (
                <>
                  <div className="basket-container">
                    <div className="basket-inner">
                      {basketitems.map((index, key) => (
                        <div key={key} className="basket-item">
                          <div className="item-img">
                            <img src={index.image} alt="img" />
                          </div>
                          <div className="item-text">
                            <h3 className="m-0">{index.title}</h3>
                            <div className="item-details">
                              <p>{index.price}$</p>
                              <button
                                onClick={() => removeFromBasket(index.id)}
                                className="delete-basket"
                              >
                                <i className="lni lni-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="total-price">
                    <h1>Total: {totalPrice}$</h1>
                  </div>
                </>
              )}
            </>
          </div>
          <div className={fav ? "favorite show" : "favorite"}>
            <div className="row">
              {favoriteItems.map((index, key) => (
                <div key={key} className="col-6">
                  <div className="fav-box">
                    <div className="fav-img">
                      <img src={index.image} alt="img" />
                    </div>
                    <div
                      onClick={() => removeFromFavorite(index.id)}
                      className="fav-btn"
                    >
                      <i className="lni lni-heart"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mobile-container">
        <div className="mobile-nav">
          <div className="logo">
            <h1>
              <Link to={"/home"}>PAW-GAMES</Link>
            </h1>
          </div>
          <div className="m-nav-menu">
            <ul>
              <li onClick={() => setSearchmobile(!searchmobile)}>
                <i className="lni lni-search-alt"></i>
              </li>
              <li onClick={() => setBasket(!basket)}>
                <i className="lni lni-cart"></i>
              </li>
              <li id="burger-menu" onClick={() => setToggle(!toggle)}>
                <i
                  className={toggle ? "lni lni-menu active" : "lni lni-menu"}
                ></i>
              </li>
            </ul>
          </div>
        </div>
        <div className={toggle ? "m-dropdown active" : "m-dropdown"}>
          <ul>
            <li id="home">
              <Link to={"/home"}>Home</Link>
              <div onClick={() => setFav(!fav)} className="fav-btn">
                <i className={fav ? "lni lni-heart show" : "lni lni-heart"}></i>
              </div>
            </li>
            <li>
              <div className="item-menu">
                <Link onClick={() => setDropdown2(!dropdown2)}>
                  Pages{" "}
                  <i
                    className={
                      dropdown2 ? "fa-solid fa-paw show" : "fa-solid fa-paw"
                    }
                  ></i>
                </Link>
                <ul className={dropdown2 ? "dp-a" : ""}>
                  <li>
                    <Link to={"/gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <Link to={"/faq"}>Help & Support</Link>
                  </li>
                  <li>
                    <Link to={"/*"}>Error 404</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to={"/store"}>Store</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
          <div className={fav ? "mobile-favorite show" : "mobile-favorite"}>
            <div className="row">
              {favoriteItems.map((index, key) => (
                <div className="col-6">
                  <div className="fav-box">
                    <div className="fav-img">
                      <img src={index.image} alt="img" />
                    </div>
                    <div
                      onClick={() => removeFromFavorite(index.id)}
                      className="fav-btn"
                    >
                      <i className="lni lni-heart"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={searchmobile ? "searchbarmobile show" : "searchbarmobile"}
        >
          <form>
            <input placeholder="Meow..." type="text" />
            <button
              type="button"
              onClick={() => setSearchmobile(!searchmobile)}
              className="close"
            >
              X
            </button>
          </form>
          {searchcon && (
            <>
              <div className="search-box show">
                {result.slice(0, 3).map((index, key) => (
                  <div key={key} className="search-item">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-4">
                          <div className="search-img">
                            <img src={index.image} alt="" />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="search-text">
                            <h4>{index.title}</h4>
                            <p>{index.description.substring(0, 300) + "..."}</p>
                          </div>
                          <div className="search-buttons">
                            <div
                              onClick={() => addToFav(index.id)}
                              className="fav-btn"
                            >
                              <i className="lni lni-heart"></i>
                            </div>
                            <div
                              onClick={() => addToBasket(index.id)}
                              className="cart-btn"
                            >
                              <i className="lni lni-cart"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                id="link"
                className="col-12 d-flex justify-content-center py-2"
              >
                <Link to={"/store"} onClick={() => searchopt()}>
                  View More
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
