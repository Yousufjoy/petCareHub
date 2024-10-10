"use client";
import React, { useEffect, useState } from "react";
import { getAllOrders } from "@/services/getOrders";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        setOrders(data.allOrders);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Order History</h1>
      
      {/* Mobile view */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div key={order.orderID} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg text-gray-800">{order.orderTitle}</span>
              <span className={`${getStatusColor(order.status)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                {order.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Order ID: {order.orderID}</p>
            <p className="text-sm text-gray-600 mb-1">Date: {order.date}</p>
            <p className="text-sm text-gray-600 mb-1">Email: {order.email}</p>
            <p className="text-sm text-gray-600 mb-1">Name: {order.name}</p>
            <p className="text-sm text-gray-600 mb-1">Price: ${order.price}</p>
            <p className="text-sm text-gray-600">Payment Method: {order.paymentMethod}</p>
          </div>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-600">
            <tr>
              {["Email", "Name", "Address", "Phone", "Date", "Order Title", "Order ID", "Price", "Payment Method", "Status", "Payment ID"].map((header) => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.orderID} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.address}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.orderTitle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.orderID}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.paymentMethod}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`${getStatusColor(order.status)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.paymentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;