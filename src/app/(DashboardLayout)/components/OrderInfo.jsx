"use client";

import { getAllOrders } from "@/services/getOrders";
import { useState, useEffect } from "react";
import { FaShoppingBag, FaTimesCircle, FaDollarSign } from "react-icons/fa";

const Ordernfo = () => {
  const [successOrderPending, setSuccessOrderPending] = useState(0);
  const [orderCancelled, setOrderCancelled] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const formatPrice = (price) => {
    if (typeof price === "number") {
      return price.toFixed(2);
    } else if (typeof price === "string") {
      const numPrice = parseFloat(price);
      return isNaN(numPrice) ? "N/A" : numPrice.toFixed(2);
    }
    return "N/A";
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();

        // Counting orders
        let cancelledOrders = 0;
        let successOrders = 0;
        let totalOrders = data.allOrders.length;
        let income = 0;

        data.allOrders.forEach((order) => {
          if (order.status === "Cancelled") {
            cancelledOrders += 1;
          } else if (order.status === "Success") {
            successOrders += 1;
          }
          // Assuming you have a price field in each order
          income += parseFloat(order.price) || 0;
        });

        setOrderCancelled(cancelledOrders);
        setSuccessOrderPending(successOrders);
        setOrderCount(totalOrders);
        setTotalIncome(income);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Order Successful Card */}
      <div className="bg-blue-200 p-4 rounded-lg shadow-md flex items-center">
        <div className="text-blue-600 text-3xl mr-4">
          <FaShoppingBag />
        </div>
        <div>
          <h3 className="text-xl font-bold">Order Successful</h3>
          <p className="text-3xl font-bold">{successOrderPending}</p>
        </div>
      </div>

      {/* Order Cancelled Card */}
      <div className="bg-red-200 p-4 rounded-lg shadow-md flex items-center">
        <div className="text-red-600 text-3xl mr-4">
          <FaTimesCircle />
        </div>
        <div>
          <h3 className="text-xl font-bold">Order Cancelled</h3>
          <p className="text-3xl font-bold">{orderCancelled}</p>
        </div>
      </div>

      {/* Order Count Card */}
      <div className="bg-green-200 p-4 rounded-lg shadow-md flex items-center">
        <div className="text-green-600 text-3xl mr-4">
          <FaShoppingBag />
        </div>
        <div>
          <h3 className="text-xl font-bold">Order Count</h3>
          <p className="text-3xl font-bold">{orderCount}</p>
        </div>
      </div>

      {/* Total Income Card */}
      <div className="bg-yellow-200 p-4 rounded-lg shadow-md flex items-center">
        <div className="text-yellow-600 text-3xl mr-4">
          <FaDollarSign />
        </div>
        <div>
          <h3 className="text-xl font-bold">Total Income</h3>
          <p className="text-3xl font-bold">${formatPrice(totalIncome)}</p>
        </div>
      </div>
    </div>
  );
};

export default Ordernfo;
