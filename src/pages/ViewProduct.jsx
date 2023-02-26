import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewProduct() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://mock-json-api.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="container h-100">
      <div className="col-12 d-flex justify-content-end">
        <Link to="/admin/products" className="btn btn-primary">
          Go Back
        </Link>
      </div>
      <div className="asd d-flex h-100 justify-items-center align-items-center">
        <div className="row">
          <div className="col-4">
            <div className="img">
              <img src={product?.image} alt={product?.title} />
            </div>
          </div>
          <div className="col-8">
            <h5>{product?.title}</h5>
            <p>{product?.description}</p>
            <p>{product?.price}</p>
            <p>{product?.platform}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
