"use client";

import { useState, useEffect } from "react";
import {
  getProductCategory,
  getSearchedProductCategory,
} from "@/services/getProducts";

const useCategoryList = () => {
  const [products, setProducts] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [searching, setSearching] = useState(false);
  const [sortOrder, setSortOrder] = useState("Sort By (Default)"); // Default sort order

  // Function to fetch products based on the search query and sort order
  const fetchProducts = async (query = "", sortOrder = "") => {
    setSearching(true);
    try {
      const data = query
        ? await getSearchedProductCategory(query, sortOrder)
        : await getProductCategory(sortOrder);
      setProducts(data?.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setSearching(false);
    }
  };

  // Fetch products when sortOrder or search input changes
  useEffect(() => {
    fetchProducts(inputValue, sortOrder);
  }, [inputValue, sortOrder]); // Dependencies include inputValue and sortOrder

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    fetchProducts(inputValue, sortOrder);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return {
    products,
    inputValue,
    searching,
    handleInputChange,
    handleSearch,
    sortOrder, // Return sortOrder and handleSortChange
    handleSortChange,
  };
};

export default useCategoryList;
