import { getProductDetails } from "@/services/getProducts";
import React from "react";

const ProductDetails = async ({ params }) => {
  console.log(params.id); // Ensure this logs the correct ID
  const details = await getProductDetails(params.id);
  console.log(details.product);
 

  return (
    <div>
   <p>{details.product.title}</p>
    </div>
  );
};

export default ProductDetails;
