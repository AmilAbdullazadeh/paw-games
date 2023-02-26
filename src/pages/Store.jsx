import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ac from "../assets/images/ac.jpg";
import Featured from "../components/featured/Featured";

function Store() {
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  const [platforms, setPlatormfs] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    tag: "",
    platform: "",
    price: 60,
  });
  const [range, setRange] = useState(60);
  const inputPrice = useRef();
  const [results, setResults] = useState(products);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const addToBasket = (id) => {
    let check = basket.filter((e) => e.id === id);
    if (check.length === 0) {
      dispatch({ type: "ADD", payload: id });
    }
  };
  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setResults(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/platforms")
      .then((res) => res.json())
      .then((data) => setPlatormfs(data));
  }, []);

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  const handleInput = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let filteredData = products.filter((a) => {
      return (
        a.title.toLowerCase().includes(search.name.toLowerCase()) &&
        a.tag.includes(search.tag) &&
        a.platform.includes(search.platform) &&
        a.price <= search.price
      );
    });
    setResults(filteredData);
  }, [search]);

  return (
    <div className="nav-mar">
      <div className="store">
        <div className="container">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      placeholder="Search..."
                      name="name"
                      onChange={handleInput}
                      className="input"
                    />
                  </div>
                  <div className="col-6 col-md-2">
                    <select
                      name="tag"
                      placeholder="Tags"
                      className="input"
                      value={search.tag}
                      onChange={handleInput}
                    >
                      <option value="">All</option>
                      {tags.map((index, key) => (
                        <option key={key} value={index.name}>
                          {index.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select
                      name="platform"
                      className="input"
                      placeholder="platform"
                      value={search.platform}
                      onChange={handleInput}
                    >
                      <option value="">All</option>
                      {platforms.map((index, key) => (
                        <option key={key} value={index.name}>
                          {index.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="range col-3 col-md-2 d-flex align-items-center justify-content-center">
                    <input
                      type="range"
                      onChange={handleInput}
                      className="input"
                      name="price"
                      defaultValue={range}
                      min={0}
                      max={60}
                      step={5}
                      ref={inputPrice}
                    />
                    <span className="itemprice">
                      {search.price ? `${search.price} $` : "60$"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  {results.map((index, key) => (
                    <div key={key} className="col-6 col-md-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
