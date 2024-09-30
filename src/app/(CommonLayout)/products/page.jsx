"use client";
import ProductCard from "@/components/Cards/ProductCard";
import useProducts from "@/components/hooks/useProductList";

const ProductsSection = () => {
  const {
    products,
    inputValue,
    searching,
    handleInputChange,
    handleSearch,
    sortOrder,
    handleSortChange,
  } = useProducts();

  return (
    <>
      <div className="md:flex md:justify-between">
        <h1 className="font-fanwood text-primary md:text-[60px] md:text-start text-center text-[40px] md:pt-[80px]">
          All Products
        </h1>
        <div className="flex md:mr-3 md:mt-0 mt-[50px] md:ml-0 ml-[60px]">
          <div className="md:pt-[100px]">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search Products"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div onClick={handleSearch} className="md:pt-[100px] md:mr-[30px]">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="md:pt-[100px] md:mt-0 mt-[30px] md:ml-0 ml-[60px]">
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
      {searching ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div className="md:grid md:grid-cols-4 gap-24 md:mx-auto md:mt-12 ml-[20px]">
          {products ? (
            products.map((prod, id) => <ProductCard key={id} products={prod} />)
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </>
  );
};

export default ProductsSection;
