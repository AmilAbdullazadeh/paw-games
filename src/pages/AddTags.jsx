import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Addtag() {
  const [tag, settag] = useState("");
  const [tags, settags] = useState([]);

  useEffect(() => {
    fetch("hhttps://mock-json-api.vercel.app/tags")
      .then((res) => res.json())
      .then((data) => settags(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: tag,
    };
    fetch("https://mock-json-api.vercel.app/tags", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => settags([...tags, data]));
  };

  const handleDelete = (id) => {
    fetch(`https://mock-json-api.vercel.app/tags/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        settags(tags.filter((e) => e.id !== id));
      }
    });
  };

  return (
    <div className="container">
      <div className="col-12 d-flex justify-content-end mb-3">
        <Link to="/admin" className="btn btn-primary">
          Go Back
        </Link>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col-10 mt-2 mb-5">
            <input
              type="text"
              placeholder="Tag Name"
              onChange={(e) => settag(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-2 mt-2 mb-5">
            <button className="btn btn-success w-100">ADD</button>
          </div>
        </div>
      </form>

      <table className="table table-hover table-dark table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((index, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{index.name}</td>
              <td>
                <button
                  onClick={() => handleDelete(index.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Addtag;
