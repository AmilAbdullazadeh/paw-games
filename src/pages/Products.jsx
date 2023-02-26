import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(true);
  const [search, setSearch] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.title === "all" || search.title === "") {
      setProducts(data);
    } else {
      let filteredData = products.filter((e) =>
        search.title.length > 0
          ? e.title.toLowerCase().startsWith(search.title.toLowerCase())
          : true
      );
      setProducts(filteredData);
    }
  };

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setProducts(data);
        setPending(false);
      });
  }, []);

  return (
    <div id="test" className="container">
      <div className="col-12 d-flex justify-content-end mb-4">
        <Link to="/admin" className="btn btn-primary">
          Go Back
        </Link>
      </div>
      <div className="col-12 mt-2 mb-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                placeholder="Search..."
                name="title"
                onChange={(e) => handleInput(e)}
                className="form-control"
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        {products.map((index, key) => (
          <Card
            key={key}
            title={index.title}
            id={index.id}
            image={index.image}
          />
        ))}
      </div>
      {pending && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Products;
