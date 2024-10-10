import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");
    const { category } = params;
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("q");
    const sortOrder = searchParams.get("sort");

    let query = { category };

    if (searchQuery) {
      query.title = { $regex: searchQuery, $options: "i" };
    }

    let sort = {};
    if (sortOrder) {
      if (sortOrder === "High To Low") {
        sort.price = -1;
      } else if (sortOrder === "Low To High") {
        sort.price = 1;
      }
    }

    const products = await productCollection
      .find(query)
      .sort(sort)
      .toArray();

    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to fetch products", { status: 500 });
  }
};