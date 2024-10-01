"use client";

import { useState } from "react";
import { createOrder } from "@/services/postApi";
import Swal from "sweetalert2";

function CreateProductForm() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const category = form.category.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const brand = form.brand.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data.data.display_url);
      const image = data.data.display_url;
      setImagePreview(image); // Set the image preview
      const productData = {
        category,
        title,
        price,
        description,
        brand,
        image,
      };
      const resp = await createOrder(productData);
      if (resp.ok) {
        console.log("Product created successfully!");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product created successfully!",
        });
        form.reset();
        setImagePreview(null); // Clear the image preview
      } else {
        console.log("Error creating product");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error creating product. Please try again.",
        });
      }
    } catch (error) {
      console.log("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Create New Product
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-gray-600 font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Category</option>
            <option value="catFood">catFood</option>
            <option value="dogFood">dogFood</option>
            <option value="birdFood">birdFood</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-600 font-medium mb-2">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product title"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-600 font-medium mb-2">
            Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product price"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-gray-600 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write product description..."
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-gray-600 font-medium mb-2">
            Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files[0]) {
                setImagePreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
        </div>

        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Product preview"
              className="max-w-full h-auto"
            />
          </div>
        )}

        <div className="flex flex-col">
          <label htmlFor="brand" className="text-gray-600 font-medium mb-2">
            Brand
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product brand"
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProductForm;
