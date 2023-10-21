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
import ProductDetails from "./components/Home/ProductDetails";
import About from "./components/Route/About";
import Contact from "./components/Route/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import PrivateRoute from "./components/Route/PrivateRoute";
import UpdateCard from "./components/Route/UpdateCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/product"),
      },

      {
        path: "product/:id",
        element: <ProductDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "updateCard/:id",
        element: (
          <PrivateRoute>
            <UpdateCard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
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
