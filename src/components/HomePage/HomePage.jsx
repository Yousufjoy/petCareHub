import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Products from "./Products";
import CategoryProducts from "./CategoryProducts";

function HomePage() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <CategoryProducts />
      <Products />
    </div>
  );
}

export default HomePage;
