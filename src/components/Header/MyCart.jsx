import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const { _id, name, photo, brand, rating, type, price, details } = products;

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your card has been deleted.", "success");
              const remaining = products.filter(
                (product) => product._id !== _id
              );
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="md:mx-32">
      <h2 className="text-4xl text-center font-bold mt-10">
        My Added Cart {products.length}
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <div key={product._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="max-h-[20rem]"
                  src={product.photo}
                  alt="Product"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-3xl text-center font-semibold mt-4">
                  {product.name}
                </h2>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
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
