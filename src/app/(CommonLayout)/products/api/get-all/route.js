import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const db = await connectDB();
  const productsCollection = db.collection("products");

  try {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("q");
    const sortOrder = searchParams.get("sort");

    let sortOptions = {};

    // Sorting based on price
    if (sortOrder === "High To Low") {
      sortOptions.price = -1; // Descending order (High to Low)
    } else if (sortOrder === "Low To High") {
      sortOptions.price = 1; // Ascending order (Low to High)
    }

    let products;

    // Search and sorting together
    if (searchQuery) {
      products = await productsCollection
        .find({
          title: { $regex: searchQuery, $options: "i" }, // Case-insensitive search
        })
        .sort(sortOptions)
        .toArray();
    } else {
      // If no search query, return all products with sorting
      products = await productsCollection.find().sort(sortOptions).toArray();
    }

    return new NextResponse(JSON.stringify({ products }), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch products", { status: 500 });
  }
};
