"use client";
import React, { useEffect, useState } from "react";

import { getAllProducts } from "@/services/getProducts";
import ProductCard from "../Cards/ProductCard";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data?.products || []);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="font-fanwood text-primary md:text-[60px] md:text-start text-center text-[40px] md:pt-[80px] ">
        Products
      </h1>
      {products ? (
        <div className="md:grid md:grid-cols-4 gap-24 md:mx-auto md:mt-12 ml-[20px]">
          {products.slice(0, 9).map((prod, id) => (
            <ProductCard key={id} products={prod}></ProductCard>
          ))}
        </div>
      ) : (
        <span className="loading loading-ring loading-lg"></span>
      )}
    </div>
  );
}

export default Products;
