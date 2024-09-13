export const postOrder = async (orderData) => {
    return await fetch("http://localhost:3000/order/api/new-order", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  