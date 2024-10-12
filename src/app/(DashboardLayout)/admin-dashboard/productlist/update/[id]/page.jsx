"use client";
import { getProductDetails } from "@/services/getProducts";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateProduct = ({ params }) => {
  const [product, setProduct] = useState(null); // Set initial state to null

  const loadProductDetails = async () => {
    const productDetails = await getProductDetails(params.id);
    setProduct(productDetails.product);
  };

  const handleUpdateProduct = async (event) => {
    event.preventDefault();

    const updateProduct = {
      title: event.target.title.value,
      category: event.target.category.value,
      price: event.target.price.value,
      brand: event.target.brand.value,
      description: event.target.description.value,
    };

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin-dashboard/productlist/api/product/${params.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updateProduct),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (resp.status === 200) {
      Swal.fire({
        title: "Updated Successfully",
        text: "Product Has Been Updated ",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    loadProductDetails();
  }, [params]);

  return (
    <div>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Update Product
            </h2>

            <form onSubmit={handleUpdateProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    defaultValue={product?.title}
                    type="text"
                    name="title"
                    placeholder="Product title"
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Category
                  </label>

                  <select
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    name="category"
                  >
                    <option>{product?.category}</option>
                    <option value="dogFood">Dog Food</option>
                    <option value="catFood">Cat Food</option>
                    <option value="birdFood">Bird Food</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    defaultValue={product?.price}
                    type="text"
                    name="price"
                    placeholder="Product price"
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Brand
                  </label>
                  <input
                    defaultValue={product?.brand}
                    type="text"
                    name="brand" // Fixed here
                    placeholder="Product brand"
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    defaultValue={product?.description}
                    name="description"
                    placeholder="Product description"
                    className="textarea textarea-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="form-control mt-10">
                <input
                  className="btn btn-primary w-full bg-blue-800 text-white py-3 rounded-lg shadow-md cursor-pointer"
                  type="submit"
                  value="Update Product"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
