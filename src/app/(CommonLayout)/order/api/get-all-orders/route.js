import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const db = await connectDB();
    const orderCollection = db.collection("orders");

    const allOrders = await orderCollection.find().toArray();

    return NextResponse.json({ allOrders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new NextResponse("Failed to fetch orders", { status: 500 });
  }
};
