export const successPayment = async (orderData) => {
  return await fetch("http://localhost:3000/payment/api/success", {
    method: "POST",
    body: JSON.stringify(orderData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
