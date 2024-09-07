// 1st Phase is coming from frontEnd and this is 2nd phase it will only hanle the request and response & 3rd phase will handle the business login which is in each page's api route 

export const getProductDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/products/api/${id}`);
  const product = await res.json();
  return product;
};

export const getProductCategory = async (category) => {
  const res = await fetch(`http://localhost:3000/category/api/${category}`);
  const product = await res.json();
  return product;
};