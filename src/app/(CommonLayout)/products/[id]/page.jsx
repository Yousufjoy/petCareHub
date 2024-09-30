import { getProductDetails } from "@/services/getProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetails = async ({ params }) => {
  const details = await getProductDetails(params.id);

  const { category, title, description, price, image, brand, _id } =
    details?.product;

  return (
    <div className="border-t border-gray-300 md:flex md:mt-[60px] mx-[60px]">
      <Image
        className="md:my-[60px]"
        src={image}
        height={500}
        width={500}
        alt="No Image Found"
      ></Image>
      <div className=" md:mt-20 md:px-20">
        <p className=" text-3xl font-bold">
          {category} <span>{title}</span>
        </p>
        <p className=" font-bold text-[20px] py-6">
          Brand: <span className=" text-[#A4BDFF]">{brand}</span>
        </p>
        <div className="border-t border-gray-300 font-bold text-[20px] py-2">
          {price}$
        </div>
        <p>
          <span className=" font-bold"> {title}</span> {description}
        </p>
        <div className="py-4">
          <Link href={`/order/${_id}`}>
            <button className="btn btn-active btn-ghost">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
