"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdatePage = ({ params }) => {
  const { data } = useSession();

  const [order, setOrder] = useState([]);

  const loadOrder = async () => {
    const orderDetails = await fetch(
      `http://localhost:3000/my-orders/api/order/${params.id}`
    );
    const data = await orderDetails.json();
    setOrder(data.data);
  };

  const handleUpdateOrder = async (event) => {
    event.preventDefault();
    const updatedOrder = {
      date: event.target.date.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };
    const resp = await fetch(
      `http://localhost:3000/my-orders/api/order/${params.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedOrder),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (resp.status === 200) {
      Swal.fire({
        title: "Updated Successfully",
        text: "Your Order Has Been Updated ",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    loadOrder();
  }, [params]);

  return (
    <div>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Update Order
            </h2>

            <form onSubmit={handleUpdateOrder}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    defaultValue={data?.user?.name}
                    type="text"
                    name="name"
                    className="input text-gray-300 input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    defaultValue={new Date().toISOString().split("T")[0]}
                    type="date"
                    name="date"
                    className="input text-gray-300 input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    defaultValue={data?.user?.email}
                    type="email"
                    name="email"
                    className="input text-gray-300 input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Due Amount
                  </label>
                  <input
                    defaultValue={`$${order?.price}`}
                    readOnly
                    type="text"
                    name="price"
                    className="input text-gray-300 input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    defaultValue={order?.phone}
                    required
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="input text-gray-300 input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Present Address
                  </label>
                  <input
                    defaultValue={order?.address}
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    className="input text-gray-300 input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="form-control mt-10">
                <input
                  className="btn btn-primary w-full bg-blue-800 text-white py-3 rounded-lg shadow-md cursor-pointer"
                  type="submit"
                  value="Update Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
