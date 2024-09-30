import Link from "next/link";
import React from "react";

const CancelPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Payment Cancled!
          </h1>
          <p className="text-gray-700 mb-6">Your payment was Canceled.</p>
          <Link href={"/"}>
            <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Go Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CancelPage;
