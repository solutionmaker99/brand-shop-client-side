import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandSection from "./BrandSection";
import bgImage from "../../assets/hero.jpg";

const Home = () => {
  const products = useLoaderData();
  // const { photo, name } = product;
  var sectionStyle = {
    backgroundImage: "url(" + { bgImage } + ")",
    backgroundSize: "cover",
  };
  return (
    <div>
      <section
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></section>
      <section className="md:mx-32">
        <h2 className="text-4xl font-semibold text-center mt-5">
          All Brand Added
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {products.slice(0, 6).map((product) => (
            <BrandSection key={product._id} product={product} />
          ))}
        </div>
      </section>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;
