// 1st Phase is coming from frontEnd and this is 2nd phase it will only handle the request that comes from the front end then it will hit the api
//that will do the logic handling & logic handling will be done by  3rd phase which is in each page's api route

export const getAllProducts = async (sortOrder = "") => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-all`
  );
  if (sortOrder) {
    url.searchParams.append("sort", sortOrder);
  }
  const res = await fetch(url.toString());
  const allProduct = await res.json();
  return allProduct;
};

export const getProductDetails = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/${id}`
  );
  const product = await res.json();
  return product;
};

export const getProductCategory = async (category, sortOrder = "") => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/category/api/${category}`
  );
  if (sortOrder) {
    url.searchParams.append("sort", sortOrder);
  }
  const res = await fetch(url.toString());
  const product = await res.json();
  return product;
};

export const getSearchedProduct = async (
  inputValue,
  sortOrder = "Sort By (Default)"
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-all?q=${inputValue}&sort=${sortOrder}`
  );
  const searchedProducts = await res.json();
  return searchedProducts;
};

export const getSearchedProductCategory = async (category) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/category/api/${category}?q=${inputValue}`
  );
  const product = await res.json();
  return product;
};
