'use client'
import { useState, useEffect } from "react";
import { getAllProducts, getSearchedProduct } from "@/services/getProducts";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [searching, setSearching] = useState(false);
  const [sortOrder, setSortOrder] = useState("Sort By (Default)"); // Default sort order

  const fetchProducts = async (query = "") => {
    setSearching(true);
    try {
      const data = query
        ? await getSearchedProduct(query, sortOrder !== "Sort By (Default)" ? sortOrder : null)
        : await getAllProducts(sortOrder !== "Sort By (Default)" ? sortOrder : null);
      setProducts(data?.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setSearching(false);
    }
  };

  // Fetch all products initially
  useEffect(() => {
    fetchProducts();
  }, [sortOrder]); // Trigger fetching when sortOrder changes

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    fetchProducts(inputValue); 
    setInputValue(""); 
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

export default useProducts;
