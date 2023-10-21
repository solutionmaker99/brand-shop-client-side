import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const brand = form.brand.value;
    const rating = form.rating.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;

    const newProduct = { name, photo, brand, rating, type, price, details };

    console.log(newProduct);

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successful",
            text: "Product added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="bg-[#cef3ce6b] p-28">
      <h2 className="text-3xl font-extrabold mb-4">Add a Product</h2>

      <form onSubmit={handleAddProduct}>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Image Here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
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
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="Type You Chosen"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Types you Chosen"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex gap-4">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Short Details"
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
                value="Add Button"
                className="btn btn-block bg-red-200 rounded-full"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
