import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const db = await connectDB();
    const createProduct = db.collection("products");

    // Parse the incoming request body
    const createdOrder = await req.json();

    // Insert the new product into the database
    const createdNewProduct = await createProduct.insertOne(createdOrder);

    // Return a success response
    return new NextResponse(
      JSON.stringify({ success: true, data: createdNewProduct }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating product:", error);

    // Return an error response
    return new NextResponse(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
