import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>Detail {id}</h2>
    </div>
  );
};

export default ProductDetail;
