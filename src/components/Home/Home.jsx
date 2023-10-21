import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandSection from "./BrandSection";
import bgImage from "../../assets/hero.jpg";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

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
        className="w-full h-screen flex justify-center items-center text-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-2xl" data-aos="zoom-in-up">
          <h1 className="mb-5 text-5xl font-bold">
            Tittle for Technology and Electronics.
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </section>

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

      {/* marquee */}

      <section className="my-20">
        <h1 className="text-center text-4xl font-semibold my-10">
          Out Product
        </h1>
        <Marquee>
          <img className="h-40 w-40 mr-20" src={img1} alt="" />
          <img className="h-40 w-40 mr-20" src={img2} alt="" />
          <img className="h-40 w-40 mr-20" src={img3} alt="" />
          <img className="h-40 w-40 mr-20" src={img4} alt="" />
          <img className="h-40 w-40 mr-20" src={img5} alt="" />
          <img className="h-40 w-40 mr-20" src={img6} alt="" />
        </Marquee>
      </section>

      {/* accordion */}

      <section className="mb-40">
        <h1 className="text-center text-4xl font-semibold my-10">
          FAQ Section
        </h1>
        <div className="collapse collapse-plus bg-base-200 mb-8">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
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
