import { connectDB } from "@/lib/connectDB";

export async function POST(request) {
  try {
    const body = await request.text(); // Read the request body as text
    const successOrder = new URLSearchParams(body); // Parse the URL-encoded data
    console.log(successOrder);

    // Convert the URLSearchParams object to a plain object
    const successOrderObj = {};
    for (const [key, value] of successOrder.entries()) {
      successOrderObj[key] = value;
    }

    // console.log("Success payment Order", successOrderObj);

    if (successOrderObj.status !== "VALID") {
      throw new Error("Invalid Payment");
    }

    const query = {
      paymentId: successOrderObj.tran_id,
    };

    const update = {
      $set: {
        status: "Success",
      },
    };

    const db = await connectDB();
    const orderCollection = db.collection("orders");

    const res = await orderCollection.updateOne(query, update);

    if (res.modifiedCount === 0) {
      throw new Error("Order not found or already updated");
    }

    return new Response(null, {
      status: 302, // Found (redirection)
      headers: {
        Location: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      },
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
