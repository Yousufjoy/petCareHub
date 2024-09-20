import Link from "next/link";
import React from "react";

function ProductCard({ products }) {
  const { category, title, price, image, _id, description } = products;

  return (
    <Link href={`/products/${_id}`}>
      <div className="card card-compact bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <figure>
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-green-600 font-bold text-lg">
            {category}
          </h2>
          <h2 className="card-title text-gray-800 font-semibold text-xl">
            {title}
          </h2>
          <p className="text-blue-500 text-lg font-semibold">${price}</p>
          <p className="text-gray-700 mt-2">{description}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary bg-gradient-to-r bg-blue-700 hover:bg-blue-600 text-white hover:from-blue-700 hover:to-blue-800">
              Show Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
