import Link from "next/link";
import React from "react";

function ProductCard({ products }) {
  const { category, title, price, image, _id } = products;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
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
