'use client'
import { useState, useEffect } from "react";
import { getAllProducts, getSearchedProduct } from "@/services/getProducts";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [searching, setSearching] = useState(false);

  // Function to fetch products based on the search query
  const fetchProducts = async (query = "") => {
    setSearching(true);
    try {
      const data = query
        ? await getSearchedProduct(query)
        : await getAllProducts();
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
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    fetchProducts(inputValue); // Fetch products based on the search query
    setInputValue(""); // Clear the input field after search
  };

  return {
    products,
    inputValue,
    searching,
    handleInputChange,
    handleSearch,
  };
};

export default useProducts;
