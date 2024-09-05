import { getProductDetails } from "@/services/getProducts";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }) => {
  console.log(params.id); // Ensure this logs the correct ID
  const details = await getProductDetails(params.id);

  const { category, title, description, price, image, brand } =
    details?.product;

  return (
    <div>
      <Image src={image} height={400} width={400} alt="No Image Found"></Image>
      <p>{category}</p>
    </div>
  );
};

export default ProductDetails;
