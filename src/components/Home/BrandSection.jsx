import React from "react";
import { Link } from "react-router-dom";

const BrandSection = ({ product }) => {
  return (
    <Link to={`product/${product._id}`}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl min-h-[456px]">
        <figure>
          <img className="max-h-[20rem]" src={product.photo} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center my-4">
            {product.name}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandSection;
