"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState([]);

  const loadData = async () => {
    const resp = await fetch(
      `http://localhost:3000/my-orders/api/${session?.user?.email}`
    );
    const data = await resp.json();
    setOrders(data?.myOrders);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleted = await fetch(
          `http://localhost:3000/my-orders/api/order/${id}`,
          {
            method: "DELETE",
          }
        );
        const resp = await deleted.json();
        if (resp?.response?.deletedCount > 0) {
          Swal.fire("Deleted!", "Your order has been deleted.", "success");
          loadData(); // Reload orders after deletion
        }
      }
    });
  };

  useEffect(() => {
    if (session?.user?.email) {
      loadData();
    }
  }, [session]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border-b text-left">Order Title</th>
                <th className="px-6 py-3 border-b text-left">Price</th>
                <th className="px-6 py-3 border-b text-left">Date</th>
                <th className="px-6 py-3 border-b text-left">Address</th>
                <th className="px-6 py-3 border-b text-left">Phone</th>
                <th className="px-6 py-3 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map(
                ({ _id, orderTitle, price, date, address, phone }) => (
                  <tr key={_id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{orderTitle}</td>
                    <td className="px-6 py-4">${price.toFixed(2)}</td>
                    <td className="px-6 py-4">{date}</td>
                    <td className="px-6 py-4">{address}</td>
                    <td className="px-6 py-4">{phone}</td>
                    <td className="px-6 py-4 flex space-x-2">
                      <Link href={`/my-orders/update/${_id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
