"use client";
import {
  getAllProducts,
  getProductCategory,
  getSearchedProduct,
} from "@/services/getProducts";
import { useEffect, useState } from "react";
import AdminProductCard from "../../components/Shared/AdminProductCard";

const ProductListPage = () => {
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getAllProducts();
      setProducts(allData.products);
    };
    fetchData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchData = await getSearchedProduct(searchTerm);
    setProducts(searchData.products);
    setSearchTerm("");
  };

  const handleCategory = async (e) => {
    const category = e.target.value;
    setCategoryValue(category);

    if (category === "") {
      // If "All Categories" is selected, fetch all products
      const allData = await getAllProducts();
      setProducts(allData.products);
    } else {
      // Otherwise, fetch products for the selected category
      const productCategory = await getProductCategory(category);
      setProducts(productCategory.products);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          >
            Search
          </button>
        </div>
        <div className="mb-4">
          <select
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={categoryValue}
            onChange={handleCategory}
          >
            <option value="">All Categories</option>
            <option value="dogFood">Dog Food</option>
            <option value="catFood">Cat Food</option>
            <option value="birdFood">Bird Food</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products ? (
          products.map((prod) => (
            <AdminProductCard key={prod._id} product={prod} />
          ))
        ) : (
          <span className="loading loading-spinner loading-lg"></span>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
