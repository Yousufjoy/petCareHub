import Link from "next/link";
import React from "react";

function ProductCard({ products }) {
  const { category, title, price, image, _id } = products;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black bg-[#EEE9F2]">{category}</h2>
          <h2 className="card-title">{title}</h2>
          <p className=" text-[#2196F3] text-xl font-semibold">{price}$</p>
          <div className="card-actions justify-end">
            <Link href={`/products/${_id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
