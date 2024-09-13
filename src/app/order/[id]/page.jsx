"use client";
import { getProductDetails } from "@/services/getProducts";
import { postOrder } from "@/services/postApi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";

const OrderPage = ({ params }) => {
  const [product, setProduct] = useState(false);
  const { data } = useSession();
  const formRef = useRef(null); // Create a ref for the form

  const loadProductDetails = async () => {
    const details = await getProductDetails(params.id);
    setProduct(details.product);
  };

  useEffect(() => {
    loadProductDetails();
  }, []);

  const { _id, title, description, image, price, category } = product;

  const handleOrder = async (event) => {
    event.preventDefault();
    const newOrder = {
      email: data?.user?.email,
      name: data?.user?.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
      orderTitle: title,
      orderID: _id,
      price: price,
    };

    try {
      const response = await postOrder(newOrder);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Order Placed Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        // Reset the form
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        console.error("Order submission failed.");
      }
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: { error },
        showConfirmButton: false,
        timer: 1500,
      });
      console.error("Error during order submission:", error);
    }
  };

  return (
    <div>
      {product ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3">
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-gray-700 mb-4">{description}</p>
              <p className="text-green-600 font-semibold mb-2">
                Price: ${price}
              </p>
              <p className="text-gray-700">
                <span className=" font-bold">Category: </span>
                {category}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <span className="loading loading-ring loading-lg"></span>
      )}

      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Fill up the form to confirm order
            </h2>

            <form ref={formRef} onSubmit={handleOrder}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    defaultValue={data?.user?.name}
                    type="text"
                    name="name"
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
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
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
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
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Due Amount
                  </label>
                  <input
                    defaultValue={`$${price}`}
                    readOnly
                    type="text"
                    name="price"
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    required
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium text-gray-700">
                    Present Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    className="input input-bordered w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="form-control mt-10">
                <input
                  className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg shadow-md cursor-pointer"
                  type="submit"
                  value="Confirm Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
