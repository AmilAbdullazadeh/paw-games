import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [platforms, setPlatforms] = useState([]);
  const [tag, setTag] = useState([]);
  const [edit, setEdit] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://mock-json-api.vercel.app/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(edit),
    }).then((res) => {
      if (res.status === 200) {
        navigate("/admin/products");
      }
    });
  };

  useEffect(() => {
    fetch(`https://mock-json-api.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/platforms")
      .then((res) => res.json())
      .then((data) => setPlatforms(data));
  }, []);

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/tags")
      .then((res) => res.json())
      .then((data) => setTag(data));
  }, []);

  return (
    <div className="container mt-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col-6 mt-2">
            <input
              type="text"
              defaultValue={product.title}
              placeholder="Title"
              name="title"
              onChange={(e) => handleInput(e)}
              className="form-control"
            />
          </div>
          <div className="col-6 mt-2">
            <input
              type="text"
              defaultValue={product.price}
              placeholder="Price"
              name="price"
              className="form-control"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="col-6 mt-2">
            <select
              name="tag"
              className="form-control"
              defaultValue={product.tag}
              onChange={(e) => handleInput(e)}
            >
              {tag.map((index, key) => (
                <option key={key} value={index.name}>
                  {index.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 mt-2">
            <select
              name="platform"
              className="form-control"
              defaultValue={product.platform}
              onChange={(e) => handleInput(e)}
            >
              {platforms.map((index, key) => (
                <option key={key} value={index.name}>
                  {index.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 mt-2">
            <input
              type="text"
              defaultValue={product.image}
              className="form-control"
              name="image"
              placeholder="image"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="col-6 mt-2">
            <input
              type="text"
              defaultValue={product.image}
              className="form-control"
              name="imagewp"
              placeholder="wallpaper"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="col-6 mt-2">
            <textarea
              style={{ resize: "none" }}
              onChange={(e) => handleInput(e)}
              name="description"
              defaultValue={product.description}
              className="form-control"
              rows="5"
            ></textarea>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <button className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
