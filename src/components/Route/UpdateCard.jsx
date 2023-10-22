import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCard = () => {
  const product = useLoaderData();
  const { _id, name, photo, brand, type, price, rating } = product;

  const handleUpdateCard = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updateProduct = {
      name,
      price,
      brand,
      type,
      rating,
      photo,
    };
    console.log(updateProduct);

    fetch(
      `https://brand-shop-assignment-server-jade.vercel.app/product/${_id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successful",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="bg-[#f4f3f0] p-28">
      <h2 className="text-3xl font-extrabold mb-4">
        Update a Product : {name}
      </h2>

      <form onSubmit={handleUpdateCard}>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Available Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                defaultValue={rating}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <br />
        <br />

        <div className="">
          <div className="form-control">
            <label className="input-group">
              <input
                type="submit"
                value="Update Product"
                className="btn btn-block bg-slate-400 rounded-lg"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCard;
