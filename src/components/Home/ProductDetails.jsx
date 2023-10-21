import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { _id, photo, name } = details;

  const handleAddtoCard = () => {
    Swal.fire({
      title: "Successful",
      text: "Successfully added Product",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  // console.log(newCoffee);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-[80vh]" src={photo} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>Price: {details.price} BDT</h3>
        <p>{details.details}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddtoCard} className="btn btn-primary">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
