import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import AddProduct from "./components/Header/AddProduct";
import MyCart from "./components/Header/MyCart";
import LogIn from "./components/Login/LogIn";
import SignUp from "./components/Sign Up/SignUp";
import ProductDetail from "./components/Home/ProductDetail";
import AuthProvider from "./provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/myCart",
        element: <MyCart />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
