import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyCart = () => {
  const products = useLoaderData();
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-10">
        My Added Cart {products.length}
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <div key={product._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl min-h-[657px]">
              <figure>
                <img src={product.photo} alt="Product" />
              </figure>
              <div className="card-body">
                <h2 className="text-3xl text-center font-semibold mt-4">
                  {product.name}
                </h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
