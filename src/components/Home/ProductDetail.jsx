import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link, useLoaderData, useParams } from "react-router-dom";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useLoaderData();
  const { _id, photo, name, brand, type, price, rating } = product;
  console.log(id);
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img className="w-[100vw] h-[50vh]" src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100vw] h-[50vh]" src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100vw] h-[50vh]" src={slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100vw] h-[50vh]" src={slide4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <p>Brand: {brand}</p>
            <p>Type: {type}</p>
          </div>
          <div className="flex justify-between">
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
          </div>
          <div className="flex justify-between">
            <Link to={`/productDetails/${_id}`} product={product}>
              <button className="btn btn-primary">Details</button>
            </Link>
            <Link to={`/updateCard/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
