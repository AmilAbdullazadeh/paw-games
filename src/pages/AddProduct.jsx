import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddProduct() {
  const [product, setProduct] = useState({});
  const [platforms, setPlatforms] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate()

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://mock-json-api.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(product),
    }).then((res) => {
      if (res.status === 201) {
        res.json();
        navigate("/admin/products")
      }
    });
  };

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/platforms")
      .then((res) => res.json())
      .then((data) => setPlatforms(data));
  }, []);

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  return (
    <div className="container">
      <div className="col-12 mt-3 d-flex justify-content-end mb-3">
        <Link to="/admin/products" className="btn btn-primary">
          Go to Products
        </Link>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col-6 mt-2">
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => handleInput(e)}
              className="form-control"
            />
          </div>
          <div className="col-6 mt-2">
            <input
              type="text"
              placeholder="Price"
              name="price"
              onChange={(e) => handleInput(e)}
              className="form-control"
            />
          </div>
          <div className="col-6 mt-2">
            <select name="platform" onChange={(e) => handleInput(e)} className="form-control" defaultValue="">
              <option value="" disabled>
                Choose a platform
              </option>
              {platforms.map((index, key) => (
                <option key={key} value={index.value}>
                  {index.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 mt-2">
            <select name="tag" onChange={(e) => handleInput(e)} className="form-control" defaultValue="">
              <option value="" disabled>
                Choose a tag
              </option>
              {tags.map((index, key) => (
                <option key={key} value={index.value} >
                  {index.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 mt-2">
            <input
              type="text"
              placeholder="Image url"
              name="image"
              onChange={(e) => handleInput(e)}
              className="form-control"
            />
          </div>
          <div className="col-6 mt-2">
            <input
              type="text"
              placeholder="Image wallpaper url"
              name="imagewp"
              onChange={(e) => handleInput(e)}
              className="form-control"
            />
          </div>
          <div className="col-6 mt-2">
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              onChange={(e) => handleInput(e)}
              className="form-control"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="col-12 mt-3">
            <button className="btn btn-success w-100">ADD A PRODUCT</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
