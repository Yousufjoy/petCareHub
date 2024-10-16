import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.text(); // Read the request body as text
    const failedOrder = new URLSearchParams(body); // Parse the URL-encoded data
    console.log(failedOrder);

    // Convert the URLSearchParams object to a plain object
    const failedOrderObj = {};
    for (const [key, value] of failedOrder.entries()) {
      failedOrderObj[key] = value;
    }

    // console.log("Failed payment Order", failedOrderObj);

    if (failedOrderObj.status !== "FAILED") {
      throw new Error("Invalid Payment Status");
    }

    const query = {
      paymentId: failedOrderObj.tran_id,
    };

    const update = {
      $set: {
        status: "Payment Failed",
      },
    };

    const db = await connectDB();
    const orderCollection = db.collection("orders");

    const res = await orderCollection.updateOne(query, update);

    if (res.modifiedCount === 0) {
      throw new Error("Order not found or already updated");
    }

    return new NextResponse(null, {
      status: 302, // Found (redirection)
      headers: {
        Location: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/fail`,
      },
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
