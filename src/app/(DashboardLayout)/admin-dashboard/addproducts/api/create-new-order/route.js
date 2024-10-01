import { connectDB } from "@/lib/connectDB";

export async function POST(req) {
  try {
    const db = await connectDB();
    const createProduct = db.collection("products");

    // Parse the incoming request body
    const createdOrder = await req.json();

    // Insert the new product into the database
    const createdNewProduct = await createProduct.insertOne(createdOrder);

    // Return a success response
    return new Response(
      JSON.stringify({ success: true, data: createdNewProduct }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating product:", error);

    // Return an error response
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
