import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const AdminProductCard = ({ product }) => {
  const { _id, category, title, price, description, image, brand } = product;

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleted = await fetch(
          `http://localhost:3000/admin-dashboard/productlist/api/product/${id}`,
          {
            method: "DELETE",
          }
        );
        const resp = await deleted.json();
        if (resp?.response?.deletedCount > 0) {
          Swal.fire(
            "Deleted!",
            "The Product has been deleted.",
            "success"
          ).then(() => {
            window.location.reload(); // Force hard reload after deletion
          });
        }
      }
    });
  };

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
        <Link href={`/admin-dashboard/productlist/update/${_id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;
