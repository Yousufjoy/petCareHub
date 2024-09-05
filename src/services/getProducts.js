export const getProductDetails = async (id) => {
    const res = await fetch(`http://localhost:3000/products/api/${id}`);
    const product = await res.json();
    return product;  
  };
  