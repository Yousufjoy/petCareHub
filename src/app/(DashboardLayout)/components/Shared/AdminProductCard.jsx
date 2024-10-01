import React from "react";

const AdminProductCard = ({ product, onEdit, onDelete }) => {
  const { category, title, price, description, image, brand } = product;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-contain rounded-lg mb-4"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
      <p className="text-gray-600 mt-2">${price}</p>
      <p className="text-gray-500 mt-2 text-sm truncate">{description}</p>
      <p className="text-gray-500 mt-2 text-sm font-medium">Brand: {brand}</p>

      <div className="flex justify-between mt-4">
        <button
          //   onClick={() => onEdit(product)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Edit
        </button>
        <button
          //   onClick={() => onDelete(product._id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;
