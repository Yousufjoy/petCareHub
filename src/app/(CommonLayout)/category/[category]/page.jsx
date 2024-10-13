// Client-side Component (e.g., pages/category/[category].js)
"use client";

import ProductCard from "@/components/Cards/ProductCard";
import React, { useEffect, useState } from "react";

const CategoryPage = ({ params }) => {
  const { category } = params;
  const [products, setProducts] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [sortOrder, setSortOrder] = useState("Sort By (Default)");
  const [searching, setSearching] = useState(false);

  const fetchCategoryData = async (searchQuery = "") => {
    setSearching(true);
    try {
      const url = new URL(
        `${process.env.NEXT_PUBLIC_BASE_URL}/category/api/${category}`
      );
      if (searchQuery) {
        url.searchParams.append("q", searchQuery);
      }
      if (sortOrder !== "Sort By (Default)") {
        url.searchParams.append("sort", sortOrder);
      }
      const response = await fetch(url.toString());
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setSearching(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchCategoryData(inputValue);
    }
  }, [category, sortOrder]);

  const handleSearchClick = () => {
    fetchCategoryData(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  return (
    <>
      <div className="md:flex md:justify-between ">
        <h1 className="font-fanwood text-primary md:text-[60px] md:text-start text-center text-[40px] md:pt-[80px] ">
          Products
        </h1>

        <div className="flex md:mr-3 md:mt-0 mt-[50px] md:ml-0 ml-[60px] ">
          <div className="md:pt-[100px] ">
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
            className="md:pt-[100px] md:mr-[30px]"
          >
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="md:pt-[100px] md:mt-0 mt-[30px] md:ml-0 ml-[60px] ">
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

      <div className="border-t border-gray-300 mt-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 md:mx-auto md:mt-12 ml-[20px]">
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
