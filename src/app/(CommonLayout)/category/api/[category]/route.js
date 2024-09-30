import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");
    const { category } = params; // Extract category from params
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("q");
    const sortOrder = searchParams.get("sort"); // Get sort order from query

    let query = { category }; // Default query for category

    if (searchQuery) {
      query.title = { $regex: searchQuery, $options: "i" }; // Case-insensitive search
    }

    let sort = {};
    if (sortOrder) {
      if (sortOrder === "High To Low") {
        sort.price = -1; // Descending order
      } else if (sortOrder === "Low To High") {
        sort.price = 1; // Ascending order
      }
    }

    const products = await productCollection
      .find(query)
      .sort(sort) // Apply sorting
      .toArray();

    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to fetch products", { status: 500 });
  }
};
