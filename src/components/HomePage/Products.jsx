"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../Shared/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const resp = await fetch("http://localhost:3000/products/api/get-all");
    const data = await resp.json();
    setProducts(data?.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className=" md:grid md:grid-cols-3 md:gap-6 md:mx-5 md:mt-24">
        {products.slice(0, 6).map((prod, id) => (
          <ProductCard key={id} products={prod}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Products;
