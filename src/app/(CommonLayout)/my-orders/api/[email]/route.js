import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const db = await connectDB();
  const orderCollection = db.collection("orders");

  try {
    const myOrders = await orderCollection
      .find({ email: params.email })
      .toArray();

    return NextResponse.json({ myOrders });
  } catch (error) {
    console.error("Error fetching orders:", error);

    return NextResponse.json(
      { message: "Failed to fetch orders", error },
      { status: 500 }
    );
  }
};
