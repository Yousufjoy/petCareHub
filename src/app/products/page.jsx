"use client";

import ProductCard from "@/components/Cards/ProductCard";
import { getAllProducts } from "@/services/getProducts";
import React, { useEffect, useState } from "react";

const AllProductsPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getAllProductsData = async () => {
      const data = await getAllProducts();
      setProducts(data?.products || []);
    };
    getAllProductsData();
  }, []);

  return (
    <div>
      <h1 className="font-fanwood text-primary md:text-[60px] md:text-start text-center text-[40px] md:pt-[80px] ">
        All Products
      </h1>
      {products ? (
        <div className="md:grid md:grid-cols-4 md:gap-24 md:mx-auto md:mt-12 ml-[20px]">
          {products.map((prod, id) => (
            <ProductCard key={id} products={prod}></ProductCard>
          ))}
        </div>
      ) : (
        <span className="loading loading-ring loading-lg"></span>
      )}
    </div>
  );
};

export default AllProductsPage;
