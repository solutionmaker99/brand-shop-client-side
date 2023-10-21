import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={details.photo} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{details.name}</h2>
        <h3>Price: {details.price} BDT</h3>
        <p>{details.details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
