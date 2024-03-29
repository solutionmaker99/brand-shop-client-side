import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import PrivateRoute from "../Route/PrivateRoute";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <PrivateRoute>
          <NavLink to="/addProduct">Add Product</NavLink>
        </PrivateRoute>
      </li>
      <li>
        <PrivateRoute>
          <NavLink to="/myCart">My Cart</NavLink>
        </PrivateRoute>
      </li>

      <li>
        <PrivateRoute>
          <NavLink to="/about">About</NavLink>
        </PrivateRoute>
      </li>
      <li>
        <PrivateRoute>
          <NavLink to="/contact">Contact</NavLink>
        </PrivateRoute>
      </li>
    </>
  );

  return (
    <div className="md:mx-32">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex mr-3">
              <img
                className="w-10 h-10 rounded-full mt-2"
                src={user.photoURL}
                alt=""
              />
              <p>{user.name}</p>
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/logIn">
              <button className="btn">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
