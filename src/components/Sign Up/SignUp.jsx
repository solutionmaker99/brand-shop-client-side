import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUpUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");

    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (password.length < 6) {
      Swal.fire({
        title: "Not Valid",
        text: "Please Input Valid Password",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (password.search(/[A-Z]/i) < 0) {
      Swal.fire({
        title: "Not Valid",
        text: "Please Input at list one capital letter.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (password.search(/[!@#$%^&*]/i) < 0) {
      Swal.fire({
        title: "Not Valid",
        text: "Please Input at list one special character.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    signUpUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Sign Up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/logIn" className="label-text-alt link link-hover">
                  Already have an account? Please Login.
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Please Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
