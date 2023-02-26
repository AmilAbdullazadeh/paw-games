import { Link } from "react-router-dom";

function Card({ image, title, id }) {
  const deleteItem = (id) => {
    fetch(`http://localhost:7000/products/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 mt-2">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title line-clamp">{title}</h5>
          <div className="btn-group">
            <Link className="btn btn-primary" to={`/admin/product/${id}`}>
              View
            </Link>
            <Link className="btn btn-warning" to={`/admin/product/${id}/edit`}>
              Edit
            </Link>
            <button className="btn btn-danger" onClick={() => deleteItem(id)}>
              Del
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
