"use client";

import ProductCard from "@/components/Cards/ProductCard";
import useCategoryList from "@/components/hooks/useCategoryList";
import React, { useEffect, useState } from "react";

const CategoryPage = ({ params }) => {
  const { category } = params;
  const {
    inputValue,
    searching,
    handleInputChange,
    handleSearch,
    sortOrder,
    handleSortChange,
  } = useCategoryList();
  const [products, setProducts] = useState(null); // Initialize as null for proper loading state

  const fetchCategoryData = async (searchQuery = "") => {
    try {
      const response = await fetch(
        `http://localhost:3000/category/api/${category}${
          searchQuery ? `?q=${searchQuery}` : ""
        }`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  // Fetch products when the category changes or a search is performed
  useEffect(() => {
    if (category) {
      fetchCategoryData(inputValue); // Include search query if it exists
    }
  }, [category]);

  const handleSearchClick = () => {
    handleSearch(); // Call the search handler from the hook
    fetchCategoryData(inputValue); // Fetch products based on the search query
  };

  return (
    <>
      <div className="md:flex md:justify-between ">
        <h1 className="font-fanwood text-primary md:text-[60px] md:text-start text-center text-[40px] md:pt-[80px]">
          Products
        </h1>

        <div className="flex md:mr-3 md:mt-0 mt-[50px] md:ml-0 ml-[60px]  ">
          <div className="md:pt-[100px]">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search Products"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div
            onClick={handleSearchClick}
            className="md:pt-[100px] md:mr-[440px]"
          >
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="md:pt-[100px] md:mt-0 mt-[30px] md:ml-0 ml-[60px]">
            <select
              className="select select-bordered w-full max-w-xs"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="Sort By (Default)">Sort By (Default)</option>
              <option value="High To Low">High To Low</option>
              <option value="Low To High">Low To High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-6"></div>
      <div className="md:grid md:grid-cols-3 md:gap-12 md:mx-auto md:mt-12 ml-[20px]">
        {searching || !products ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          products.map((prod, id) => <ProductCard key={id} products={prod} />)
        )}
      </div>
    </>
  );
};

export default CategoryPage;
