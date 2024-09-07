import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Products from "./Products";
import CategoryProducts from "./CategoryProducts";
import ContactUs from "./ContactUs";

function HomePage() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <CategoryProducts />
      <Products />
      <ContactUs />
    </div>
  );
}

export default HomePage;
