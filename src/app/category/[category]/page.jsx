"use client";

import ProductCard from "@/components/Cards/ProductCard";
import React, { useEffect, useState } from "react";

const CategoryPage = ({ params }) => {
  const { category } = params;
  const [products, setProducts] = useState(null); // Initialize as null for proper loading state

  const getCategoryData = async () => {
    try {
      const resp = await fetch(
        `http://localhost:3000/category/api/${category}`
      );
      const data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    if (category) {
      getCategoryData();
    }
  }, [category]);

  return (
    <div>
      <h1 className="font-fanwood text-primary md:text-[50px] md:text-start text-center text-[40px] md:pt-[80px]">
        Products
      </h1>

      {/* Check for products to avoid mapping null */}
      <div className="md:grid md:grid-cols-3 md:gap-12 md:mx-auto md:mt-12 ml-[20px]">
        {products ? (
          products.map((prod, id) => <ProductCard key={id} products={prod} />)
        ) : (
          <span className="loading loading-ring loading-lg "></span>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
