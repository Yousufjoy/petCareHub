export const getAllOrders = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/order/api/get-all-orders`
  ); // Await the fetch call
  const orders = await res.json(); // Await the response to parse the JSON
  return orders;
};
