import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.text(); // Read the request body as text
    const cancelledOrder = new URLSearchParams(body); // Parse the URL-encoded data
    console.log(cancelledOrder);

    // Convert the URLSearchParams object to a plain object
    const cancelledOrderObj = {};
    for (const [key, value] of cancelledOrder.entries()) {
      cancelledOrderObj[key] = value;
    }

    if (cancelledOrderObj.status !== "CANCELLED") {
      throw new Error("Invalid Order Status");
    }

    const query = {
      paymentId: cancelledOrderObj.tran_id,
    };

    const update = {
      $set: {
        status: "Cancelled",
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
        Location: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancel`,
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
