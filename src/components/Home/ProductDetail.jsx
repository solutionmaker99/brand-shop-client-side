import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useLoaderData();
  const { _id, photo, name, brand, type, price, rating } = product;
  console.log(id);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <p>Brand: {brand}</p>
            <p>Type: {type}</p>
          </div>
          <div className="flex justify-between">
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
          </div>
          <div className="flex justify-between">
            <Link to={`/productDetails/${_id}`} product={product}>
              <button className="btn btn-primary">Details</button>
            </Link>
            <Link to={`/updateCard/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
