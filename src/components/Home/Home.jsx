import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandSection from "./BrandSection";

const Home = () => {
  const products = useLoaderData();
  // const { photo, name } = product;
  return (
    <div>
      <h2>Home Page</h2>
      <h3>Total Product : {products.length}</h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {products.slice(0, 6).map((product) => (
          <BrandSection key={product._id} product={product} />
        ))}
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;
